import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    const{ name,id,email} = props.user;
    return (
        <div className='border border-red-300 border-solid w-72		p-10	'>
        <h1>{name}</h1>
        <h2>{email}</h2>
        <p className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'><Link to={`/user/${id}`}>Show Details</Link></p>
        </div>
    );
};

export default User;