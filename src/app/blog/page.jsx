import React from 'react';
import styles from './blog.module.css';
import PostCard from '@/components/postCards/PostCard';

const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) throw new Error("couldn't fetch data");

    return res.json();
};

const BlogPage = async () => {
    const posts = await getData();

    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
};

export default BlogPage;
