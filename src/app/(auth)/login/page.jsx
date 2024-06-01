import { login } from '@/lib/action';
import { auth, signIn } from '@/lib/auth';
import React from 'react';

const LoginPage = async () => {
    const session = await auth();
    // console.log(session);

    const handleGithubLogin = async () => {
        'use server';

        await signIn('github');
    };

    return (
        <div>
            <form action={handleGithubLogin}>
                <button>Login with Github</button>
            </form>

            <form action={login}>
                <input type="text" placeholder="username" name="username" />
                <input type="password" placeholder="password" name="password" />
                <button>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
