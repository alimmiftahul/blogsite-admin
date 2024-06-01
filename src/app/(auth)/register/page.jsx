import React from 'react';
import styles from './register.module.css';
import { addUser } from '@/lib/action';

const RegisterPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={addUser} className={styles.form}>
                    <input type="text" placeholder="username" name="username" />
                    <input type="text" placeholder="email" name="email" />
                    <input type="password" placeholder="password" name="password" />
                    <input
                        type="password"
                        placeholder="confirmPassword"
                        name="confirmPassword"
                    />
                    <button>submit</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
