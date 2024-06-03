import { Post, User } from './models';
import { connectToDB } from './utils';

export const getPosts = async () => {
    try {
        connectToDB();
        const posts = await Post.find();
        console.log('success');
        // console.log(posts);
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error('error');
    }
};

export const getPost = async (slug) => {
    try {
        connectToDB();
        const post = await Post.findOne({ slug: slug });
        console.log('success');
        console.log(post);
        return post;
    } catch (error) {
        console.log(error);
        throw new Error('error');
    }
};

export const getUser = async (id) => {
    try {
        connectToDB();
        const user = await User.findById(id);
        console.log('user', user);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error('error');
    }
};

export const getUsers = async () => {
    try {
        connectToDB();
        const user = await User.find();
        console.log('user', user);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error('error');
    }
};
