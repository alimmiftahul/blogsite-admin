'use client';

import React, { useEffect, useState } from 'react';
import styles from './contact.module.css';
import Image from 'next/image';

const page = () => {
    const [isSclient, setClient] = useState(false);
    useEffect(() => {
        setClient(true);
    });
    const b = Math.random();
    console.log('it works');
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="" fill className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                {isSclient && b}
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
                    <button
                        className={styles.btn}
                        onClick={() => console.log('object send')}
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default page;
