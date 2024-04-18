import React from 'react';
import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image
                        src="https://images.pexels.com/photos/12887621/pexels-photo-12887621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        fill
                        className={styles.img}
                    />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>title</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet
                    deserunt eveniet delectus, a unde impedit cumque sunt, est, veritatis
                    eius saepe. Quam, ipsam. Quibusdam placeat illo a unde odio.
                </p>
                <Link href="/blog/post/" className={styles.link}>
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
