'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const NavigationTest = () => {
    // CLIENT SIDE NAVIGATIO
    const router = useRouter();
    const pathName = usePathname();
    console.log(pathName);

    const searchParams = useSearchParams();

    const q = searchParams.get('q');
    console.log(q);

    const handleClick = () => {
        console.log('clicked');
        router.refresh('/');
    };
    return (
        <div>
            <Link href="/" prefetch={false}>
                click here
            </Link>
            <button onClick={handleClick}>Write and Redirect</button>
        </div>
    );
};

export default NavigationTest;
