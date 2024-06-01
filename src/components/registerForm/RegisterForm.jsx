'use client';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './registerform.module.css';
import { register } from '@/lib/action';
import Link from 'next/link';

const RegisterForm = () => {
    const [state, formAction] = useFormState(register, undefined);
    const router = useRouter();

    useEffect(() => {
        if (state?.success) {
            toast.success('Registration successful! Redirecting to login...', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setTimeout(() => {
                router.push('/login');
            }, 3000);
        }
    }, [state?.success, router]);

    return (
        <div>
            <form action={formAction} className={styles.form}>
                <input type="text" placeholder="username" name="username" />
                <input type="text" placeholder="email" name="email" />
                <input type="password" placeholder="password" name="password" />
                <input
                    type="password"
                    placeholder="confirm Password"
                    name="confirmPassword"
                />
                <button>Submit</button>
                {state?.error && <p>{state.error}</p>}
                <Link href="/login">
                    Have an account ? <b>Login</b>
                </Link>
            </form>

            <ToastContainer />
        </div>
    );
};

export default RegisterForm;
