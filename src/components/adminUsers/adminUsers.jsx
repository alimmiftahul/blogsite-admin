import React from 'react';
import styles from './adminUsers.module.css';
import { getUser, getUsers } from '@/lib/data';
import Image from 'next/image';
import { deleteUser } from '@/lib/action';
import { auth } from '@/lib/auth';

const AdminUsers = async () => {
    const users = await getUsers();
    // console.log(users);
    const session = await auth();
    const loggedInUser = session.user.id;

    const filteredUsers = users.filter((user) => user.id !== loggedInUser);
    console.log(filteredUsers);

    return (
        <div>
            <h1>Users</h1>
            {filteredUsers.map((user) => (
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
