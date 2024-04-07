'use client';
import React, { useState } from 'react';
import NavLink from './navLink/navLink';
import styles from './links.module.css';

const Links = () => {
    const [open, setOpen] = useState(false);

    const links = [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'About',
            path: '/about',
        },
        {
            title: 'Contact',
            path: '/contact',
        },
        {
            title: 'Blog',
            path: '/blog',
        },
    ];

    const session = true;
    const isAdmin = true;
    const toggleMenu = () => {
        setOpen((prev) => !prev); // Toggle the value of open
    };

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {session && (
                    <>
                        {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
                        <button className={styles.logout}>Logout</button>
                    </>
                )}
            </div>
            <button className={styles.menuButtons} onClick={toggleMenu}>
                {open ? (
                    <span style={{ fontSize: '25px' }}>&#x2715;</span> // Render "X" icon when menu is open
                ) : (
                    <span style={{ fontSize: '25px' }}>&#9776;</span> // Render hamburger icon when menu is closed
                )}
            </button>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Links;
