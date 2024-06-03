'use client';

import React from 'react';
import styles from './adminUserForm.module.css';
import { useFormState } from 'react-dom';
import { addUser } from '@/lib/action';

const AdminUserForm = () => {
    const [state, formAction] = useFormState(addUser, undefined);
    return (
        <form action={formAction}>
            <h1>add user</h1>
            <input type="text" placeholder="username" name="username" />
            <input type="text" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <input
                type="password"
                placeholder="confirm Password"
                name="confirmPassword"
            />
            <button>Submit</button>
        </form>
    );
};

export default AdminUserForm;
