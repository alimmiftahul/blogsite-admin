import { addPost, deletePost } from '@/lib/action';
import React from 'react';

const ServerActionTestPage = () => {
    const actionincomponent = async () => {
        'use server';
        console.log('it works');
    };
    return (
        <div>
            <form action={addPost}>
                <input type="text" placeholder="title" name="title" />
                <input type="text" placeholder="desc" name="desc" />
                <input type="text" placeholder="userId" name="userId" />
                <button>Create</button>
            </form>
            <form action={deletePost}>
                <input type="text" placeholder="userId" name="id" />
                <button>delete</button>
            </form>
        </div>
    );
};

export default ServerActionTestPage;
