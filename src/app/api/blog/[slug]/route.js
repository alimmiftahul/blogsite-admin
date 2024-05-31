import { Post } from '@/lib/models';
import { connectToDB } from '@/lib/utils';
import { NextResponse } from 'next/server';

// FETCH DATA WITH AN API

export const GET = async (request, { params }) => {
    const { slug } = params;
    console.log(slug);
    try {
        connectToDB;
        const post = await Post.findOne({ slug });
        return NextResponse.json(post);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
export const DELETE = async (request, { params }) => {
    const { slug } = params;
    console.log(slug);
    try {
        connectToDB;
        const post = await Post.deleteOne({ slug });
        return NextResponse.json('post deleted');
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
