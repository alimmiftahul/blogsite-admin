// const users = [
//     {id:1, name: 'John', body: 'johndoe@gmail.com'},
// ]

import { Post, User } from './models';
import { connectToDB } from './utils';

export const getPost = async (slug) => {
    connectToDB();
    try {
        const post = await Post.find({ slug });
        console.log('success');
        return post;
    } catch (error) {
        console.log(error);
        throw new Error('error');
    }
};

export const getUSer = async (userId) => {
    try {
        connectToDB();
        const post = await User.findById(userId);
        return post;
    } catch (error) {
        console.log(error);
        throw new Error('error');
    }
};
