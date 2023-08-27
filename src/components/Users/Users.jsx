import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const data = useLoaderData();
    return (
        <div className=''>
            {data.map(user => <User user={user} key={user.id}></User> ) }
        </div>
    );
};


export default Users;