import React from 'react';
import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getUTCDate().toString().padStart(2, '0'); // Ensure two digits
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // getUTCMonth() returns 0-11, so add 1 and ensure two digits
    const year = date.getUTCFullYear();
    return `${day}.${month}.${year}`;
};

const PostCard = ({ post }) => {
    const date = formatDate(post.createdAt);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image
                        src={
                            post.img
                                ? post.img
                                : 'https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        }
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className={styles.img}
                    />
                </div>
                <span className={styles.date}>{date}</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.description}>{post.body}</p>
                <Link href={`/blog/${post.slug}`} className={styles.link}>
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
