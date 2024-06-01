'use server';
import { connectToDB } from './utils';
import { Post, User } from './models';
import { revalidatePath } from 'next/cache';
import { signOut } from './auth';

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

export const addUser = async (formData) => {
    console.log('hello world');

    const { username, email, password, confirmPassword } = Object.fromEntries(formData);
    if (password !== confirmPassword) {
        return 'password not match';
    }

    console.log(username, email, password);

    try {
        connectToDB();

        const user = await User.findOne({ username });
        if (user) {
            return 'username already exist';
        }
        const newUser = await User({
            username,
            email,
            password,
        });
        await newUser.save();
        console.log('save to DB');
    } catch (error) {
        console.log(error);
        throw new Error('error');
    }
};
