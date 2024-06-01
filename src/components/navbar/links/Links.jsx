'use client';
import React, { useState } from 'react';
import NavLink from './navLink/navLink';
import styles from './links.module.css';
import { handleGithubLogout } from '@/lib/action';

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

const toggleMenu = () => {
    setOpen((prev) => !prev); // Toggle the value of open
};

const Links = ({ session }) => {
    const [open, setOpen] = useState(false);

    // const isAdmin = true;
    // console.log(session.user);

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {session?.user ? (
                    <>
                        {session.user?.isAdmin && (
                            <NavLink item={{ title: 'Admin', path: '/admin' }} />
                        )}
                        <form action={handleGithubLogout}>
                            <button type="submit" className={styles.logout}>
                                Logout
                            </button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{ title: 'Login', path: '/login' }} />
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
