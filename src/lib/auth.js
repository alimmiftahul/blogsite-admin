import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { User } from './models';
import { connectToDB } from './utils';

const login = async (credentials) => {
    try {
        connectToDB();

        const user = await User.findOne({ username: credentials.username });
        if (!user) throw new Error('wrong credentials');
        const isPasswordMatch = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordMatch) throw new Error('wrong credentials');
        return user;
    } catch (error) {
        console.log(error);
        return { error: error.message };
    }
};

export const {
    handlers: { GET, POST },
    signIn,
    signOut,
    auth,
} = NextAuth({
    providers: [
        Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                console.log('credentials', credentials);
                await connectToDB(); // Ensure the database connection

                try {
                    const user = await login(credentials);
                    // console.log('user', user);
                    return user;
                } catch (error) {
                    console.error('Error signing in:', error);
                    return null; // Return false if there was an error
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            // Check if the provider is GitHub
            console.log(user, account, profile);
            // console.log('account', account.provider);
            if (account.provider === 'github') {
                await connectToDB(); // Ensure the database connection

                try {
                    // Check if the user exists in the database
                    const existingUser = await User.findOne({ email: profile.email });

                    // If user does not exist, create a new user
                    if (!existingUser) {
                        const newUser = new User({
                            username: profile.login,
                            email: profile.email,
                            image: profile.avatar_url,
                        });
                        await newUser.save();
                    }
                } catch (error) {
                    console.error('Error signing in:', error);
                    return false; // Return false if there was an error
                }
            }
            console.log('Signing in');
            return true; // Return true if sign-in is successful
        },
    },
});
