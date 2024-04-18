'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const NavigationTestPage = () => {
    const router = useRouter();
    const pathname = usePathname();
    console.log(pathname);

    const handleClick = () => {
        console.log('clicked navigation');
        router.push('/');
    };
    return (
        <div>
            <Link href="/"> Click here</Link>
            <button onClick={handleClick}>click this</button>
        </div>
    );
};

export default NavigationTestPage;
