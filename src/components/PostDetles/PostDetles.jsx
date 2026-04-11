import React from 'react';
import { useActionData, useNavigate } from 'react-router';
import { useLoaderData } from 'react-router';

const PostDetles = () => {
    const navegate =useNavigate()
    const post = useLoaderData();

const backNavigate = () => {
    navegate(-1);
}

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>{post.id}</p>

            <button onClick={backNavigate} className='btn btn-primary mt-4'>
               Go Back
                </button>
        </div>
    );
};

export default PostDetles; 