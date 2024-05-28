// 'use client';

import React from 'react';
// import dynamic from 'next/dynamic';
import styles from './contact.module.css';
import Image from 'next/image';

// const HydrationNoSSR = dynamic(() => import('@/components/hydrationTest'), {
//     ssr: false,
// });

const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="" fill className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name and surname" />
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Phone Number" />
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="message"
                    ></textarea>
                    <button className={styles.btn}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default page;
