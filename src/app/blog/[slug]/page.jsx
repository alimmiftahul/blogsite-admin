import React from 'react';
import styles from './singlePost.module.css';
import Image from 'next/image';

const SinglePostPage = ({ params }) => {
    console.log({ params });
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/12887621/pexels-photo-12887621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    fill
                    className={styles.img}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>title</h1>
                <div className={styles.details}>
                    <Image
                        src="https://images.pexels.com/photos/12887621/pexels-photo-12887621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        width={50}
                        height={50}
                        className={styles.avatar}
                    />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.nameAuthor}>John Doe</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailPublished}>Published</span>
                        <span className={styles.date}>20-12-23</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
                    blanditiis dolorum deleniti commodi rem ut fuga nobis eaque culpa
                    numquam possimus officiis cumque veritatis animi, quo excepturi
                    perferendis consequatur dolorem.
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;
