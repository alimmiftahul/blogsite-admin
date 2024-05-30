import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <ClipLoader size={50} color={'#ffff'} loading={true} />
        </div>
    );
};

export default Loading;
