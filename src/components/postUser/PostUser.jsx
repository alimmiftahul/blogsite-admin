import React from 'react';
import styles from './postuser.module.css';
import { getUser } from '@/lib/data';

const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/`);

    if (!res.ok) throw new Error("Couldn't fetch data");
    return res.json();
};

const PostUser = async ({ userId }) => {
    const user = await getUser(userId);
    return (
        <div className={styles.container}>
            <span className={styles.username}>{user.username}</span>
        </div>
    );
};

export default PostUser;
