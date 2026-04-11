import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {

    const data  = useLoaderData();

    
    return (
        <div>
            {data.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))} 
        </div>
    );
};

export default Users;