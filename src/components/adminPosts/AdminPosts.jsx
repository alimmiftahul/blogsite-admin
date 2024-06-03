import React from 'react';
import styles from './adminposts.module.css';
import { getPosts } from '@/lib/data';
import { deletePost } from '@/lib/action';
import Image from 'next/image';

const AdminPosts = async () => {
    const posts = await getPosts();
    console.log(posts);
    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post, index) => (
                <div className={styles.post} key={post.id}>
                    <div className={styles.detail}>
                        <Image
                            src={post.img || '/noavatar.png'}
                            alt=""
                            width={50}
                            height={50}
                        />
                        <span className={styles.postTitle}>{post.title}</span>
                    </div>
                    <form action={deletePost}>
                        <input type="hidden" name="id" value={post.id} />
                        <button className={styles.postBtn}>Delete</button>
                    </form>
                </div>
            ))}
        </div>
    );
};

export default AdminPosts;
