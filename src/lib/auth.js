import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';

import { User } from './models';
import { connectToDB } from './utils';

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
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            // Check if the provider is GitHub
            console.log('account', account.provider);
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
