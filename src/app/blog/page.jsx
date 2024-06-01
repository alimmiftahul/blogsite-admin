import React from 'react';
import styles from './blog.module.css';
import PostCard from '@/components/postCards/PostCard';
// import { getPost, getPosts } from '@/lib/data';

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/blog', {
        cache: 'no-store',
    });

    if (!res.ok) throw new Error(`Error fetching data: ${res.statusText}`);

    // console.log(res);
    return res.json();
};
// const getData = async () => {
//     const res = await fetch('http://localhost:3000/api/blog', {
//         next: { revalidate: 3600 },
//     });

//     if (!res.ok) throw new Error(`Error fetching data: ${res.statusText}`);

//     return res.json();
// };

const BlogPage = async () => {
    const posts = await getData();
    // const posts = await getPosts();
    // console.log(posts);

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
