import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>Details of user are here</h1>
            <h2>Name : {users.name}</h2>
            <h3>UserName :{users.username}</h3>
            <h3>Email :{users.email}</h3>
        </div>
    );
};

export default UserDetails;