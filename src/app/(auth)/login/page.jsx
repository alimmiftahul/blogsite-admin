import { handleGithubLogin } from '@/lib/action';
import React from 'react';
import styles from './login.module.css';
import LoginForm from '@/components/loginForm/LoginForm';

const LoginPage = () => {
    // const session = await auth();
    // console.log(session);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <LoginForm />
                <form action={handleGithubLogin}>
                    <button>Login with Github</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
