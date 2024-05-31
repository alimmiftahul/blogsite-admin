import { connectToDB } from './utils';
import { Post } from './models';
import { revalidatePath } from 'next/cache';

export const addPost = async (formData) => {
    'use server';

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
