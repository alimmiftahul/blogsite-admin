import React from 'react';
import styles from './adminUsers.module.css';
import { getUser, getUsers } from '@/lib/data';
import Image from 'next/image';
import { deleteUser } from '@/lib/action';

const AdminUsers = async () => {
    const users = await getUsers();
    // console.log(users);

    return (
        <div>
            <h1>Users</h1>
            {users.map((user) => (
                <div className={styles.user} key={user.id}>
                    <div className={styles.detail}>
                        <Image
                            src={user.img || '/noavatar.png'}
                            alt=""
                            width={50}
                            height={50}
                        />
                        <span className={styles.postTitle}>{user.username}</span>
                    </div>
                    <form action={deleteUser}>
                        <input type="hidden" name="id" value={user.id} />
                        <button className={styles.postBtn}>Delete</button>
                    </form>
                </div>
            ))}
        </div>
    );
};

export default AdminUsers;
