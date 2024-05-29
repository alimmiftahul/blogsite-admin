import React from 'react';
import styles from './singlePost.module.css';
import Image from 'next/image';
import PostUser from '@/components/postUser/PostUser';

const getData = async (slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}/`, {
        cache: 'no-store',
    });

    if (!res.ok) throw new Error("Couldn't fetch data");
    return res.json();
};

const SinglePostPage = async ({ params }) => {
    console.log({ params });
    const { slug } = params;
    const post = await getData(slug);
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/12887621/pexels-photo-12887621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    fill
                    className={styles.img}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.details}>
                    <Image
                        src="https://images.pexels.com/photos/12887621/pexels-photo-12887621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        width={50}
                        height={50}
                        className={styles.avatar}
                    />
                    <PostUser userId={post.userId} />
                    <div className={styles.detailText}>
                        <span className={styles.detailPublished}>Published</span>
                        <span className={styles.date}>11-2-35</span>
                    </div>
                </div>
                <div className={styles.content}>{post.body}</div>
            </div>
        </div>
    );
};

export default SinglePostPage;
