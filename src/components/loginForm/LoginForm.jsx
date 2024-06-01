// LoginForm.jsx
'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import from next/router instead of next/navigation
import styles from './loginform.module.css';
import { useFormState } from 'react-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '@/lib/action';
import Link from 'next/link';

const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined);
    const router = useRouter();
    // console.log('state : ', state);

    useEffect(() => {
        if (state?.success) {
            toast.success('Login successful!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            router.push('/blog'); // Redirect to /blog on successful login
        } else if (state?.error) {
            toast.error(state.error, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [state?.success, state?.error, router]);
    return (
        <div>
            <form action={formAction} className={styles.form}>
                <input type="text" placeholder="username" name="username" />
                <input type="password" placeholder="password" name="password" />
                <button>Login</button>
                <Link href="/register">
                    {" Don't have an account? "}
                    <b>Register</b>
                </Link>
            </form>
            <ToastContainer />
        </div>
    );
};

export default LoginForm;
