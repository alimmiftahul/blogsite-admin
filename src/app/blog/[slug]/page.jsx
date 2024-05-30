import React from 'react';
import styles from './singlePost.module.css';
import Image from 'next/image';
import PostUser from '@/components/postUser/PostUser';
import { getPost } from '@/lib/data';
import { User } from '@/lib/models';
import noAvatar from './../../../../public/noAvatar.png';

// const getData = async (slug) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}/`, {
//         cache: 'no-store',
//     });

//     if (!res.ok) throw new Error("Couldn't fetch data");
//     return res.json();
// };

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getUTCFullYear();
    return `${day} ${month} ${year}`;
};

const calculateReadingTime = (text) => {
    const wordsPerMinute = 200; // Average reading speed
    const words = text.split(/\s+/).length; // Split by whitespace and get the word count
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
};

export const generateMetadata = async ({ params }) => {
    const { slug } = params;
    const post = await getPost(slug);
    return { title: post.title, description: post.desc };
};

const SinglePostPage = async ({ params }) => {
    console.log({ params });
    const { slug } = params;
    const post = await getPost(slug);

    const publishDate = formatDate(post.createdAt);
    console.log(publishDate);

    const minuteRead = calculateReadingTime(post.desc);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                {post.img && <Image src={post.img} alt="" fill className={styles.img} />}
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.details}>
                    <Image
                        src={User.img ? User.img : noAvatar}
                        alt=""
                        width={50}
                        height={50}
                        className={styles.avatar}
                    />
                    <div className={styles.detailUser}>
                        <PostUser userId={post.userId} />
                        <div className={styles.detailText}>
                            <span className={styles.date}>
                                {post.createdAt.toString().slice(4, 16)}
                            </span>
                            <span className={styles.detailPublished}>
                                {minuteRead} min read
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.content}>{post.body}</div>
                <div className={styles.desc}>{post.desc}</div>
            </div>
        </div>
    );
};

export default SinglePostPage;
