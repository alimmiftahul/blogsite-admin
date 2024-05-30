import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>A'M Tech dev</div>
            <div className={styles.text}>Normal people</div>
        </div>
    );
};

export default Footer;
