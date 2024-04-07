import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <p>sorry, the page you are looking for is not found</p>
            <Link href={'/'}>Return To Home</Link>
        </div>
    );
};

export default NotFound;
