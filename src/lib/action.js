'use server';
import { connectToDB } from './utils';
import { Post, User } from './models';
import { revalidatePath } from 'next/cache';
import { signIn, signOut } from './auth';
import bcrypt from 'bcryptjs';

export const addPost = async (formData) => {
    console.log('hello world');

    // const title = formData.get('title');
    // const desc = formData.get('desc');
    // const slug = formData.get('slug');

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    console.log(title, desc, slug);

    try {
        connectToDB();
        const newPost = await Post({
            title,
            desc,
            slug,
            userId,
        });
        await newPost.save();
        console.log('save to DB');

        return true;
    } catch (error) {
        console.log(error);
        throw new Error('error');
    }
};
export const deletePost = async (formData) => {
    'use server';

    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await Post.findByIdAndDelete(id);
        console.log('deleted to db');
        revalidatePath('/blog');
    } catch (error) {
        console.log(error);
        return { error: error.message };
    }
};

export const handleGithubLogin = async () => {
    'use server';
    await signIn('github');
};

export const handleGithubLogout = async () => {
    'use server';
    await signOut();
};

export const register = async (previousState, formData) => {
    console.log('hello world');

    const { username, email, password, confirmPassword } = Object.fromEntries(formData);
    if (password !== confirmPassword) {
        return { error: 'password not match' };
    }

    console.log(username, email, password);

    try {
        connectToDB();

        const user = await User.findOne({ username });
        if (user) {
            return { error: 'username already exist' };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User({
            username,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        console.log('save to DB');

        return { success: true };
    } catch (error) {
        console.log(error);
        return { error: error.message };
    }
};

export const login = async (previousState, formData) => {
    'use server';
    const { username, password } = Object.fromEntries(formData);
    let result;
    result = await signIn('credentials', { username, password });
    console.log('result : ', result);

    if (result.error) {
        console.error(result.error);
        if (result.error.message.includes('CredentialsSignin'))
            return { error: 'inavalid username or password' };
        return { error: result.error.message };
    } else {
        return { success: true };
    }
};
