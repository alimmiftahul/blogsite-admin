import React from 'react';
import styles from './about.module.css';
import Image from 'next/image';

const BlogPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About agency</h2>
                <h1 className={styles.title}>lorem</h1>
                <p className={styles.description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
                    atque dolorum! Velit eius, quas a repellat voluptas sapiente
                    reprehenderit sunt inventore, officiis consequuntur quo animi enim
                    debitis similique? Aliquid, corrupti.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt="about image" fill className={styles.img} />
            </div>
        </div>
    );
};

export default BlogPage;
