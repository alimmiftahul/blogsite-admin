import { login } from '@/lib/action';
import { auth, signIn } from '@/lib/auth';
import React from 'react';
import styles from './login.module.css';

const LoginPage = async () => {
    const session = await auth();
    // console.log(session);

    const handleGithubLogin = async () => {
        'use server';

        await signIn('github');
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={login} className={styles.form}>
                    <input type="text" placeholder="username" name="username" />
                    <input type="password" placeholder="password" name="password" />
                    <button>Login</button>
                </form>

                <form action={handleGithubLogin}>
                    <button>Login with Github</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
