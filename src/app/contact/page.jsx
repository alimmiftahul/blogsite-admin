'use client';

import React from 'react';
import styles from './contact.module.css';
import Image from 'next/image';

const page = () => {
    console.log('it works');
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
                    <button
                        className={styles.btn}
                        onClick={() => console.log('hello world')}
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default page;
