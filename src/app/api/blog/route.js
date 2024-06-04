import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/utils';
import { Post } from '@/lib/models';

export const GET = async (request) => {
    try {
        await connectToDB();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (error) {
        console.log(error);
        return new NextResponse('Failed to fetch posts', { status: 500 });
    }
};
