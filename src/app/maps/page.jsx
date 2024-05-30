'use client';

import dynamic from 'next/dynamic';

const LazyMap = dynamic(() => import('@/components/Map'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

const Maps = () => {
    return (
        <main>
            <LazyMap />
        </main>
    );
};

export default Maps;
