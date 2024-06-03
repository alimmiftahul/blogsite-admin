import React, { Suspense } from 'react';
import styles from './adminpage.module.css';
import AdminPosts from '@/components/adminPosts/AdminPosts';
import AdminUsers from '@/components/adminUsers/AdminUsers';
import AdminUserForm from '@/components/adminUserForm/AdminUserForm';
import AdminPostForm from '@/components/adminPostForm/AdminPostForm';
import { auth } from '@/lib/auth';

const AdminPage = async () => {
    const session = await auth();
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<div>Loading .... </div>}>
                        <AdminPosts />
                    </Suspense>
                </div>
                <div className={styles.col}>
                    <AdminPostForm userId={session.user.id} />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<div>Loading .... </div>}>
                        <AdminUsers />
                    </Suspense>
                </div>
                <div className={styles.col}>
                    <AdminUserForm userId={session.user.id} />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
