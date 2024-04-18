import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Alims dev</div>
            <div className={styles.text}>the agency of mining construction</div>
        </div>
    );
};

export default Footer;
