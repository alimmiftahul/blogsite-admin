'use client';

import { addPost } from '@/lib/action';
import React from 'react';
import { useFormState } from 'react-dom';
import styles from './adminpostform.module.css';

const AdminPostForm = ({ userId }) => {
    const [state, formAction] = useFormState(addPost, undefined);

    return (
        <form action={formAction} className={styles.form}>
            <h1 className={styles.title}>add post</h1>
            <input type="hidden" name="userId" value={userId} />
            <input type="text" name="title" placeholder="title" />
            <input type="text" name="desc" placeholder="desc" />
            <button>add post</button>
        </form>
    );
};

export default AdminPostForm;
