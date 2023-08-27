import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title} = post;

    const navigate  = useNavigate();
    const handlePostDetails = ()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='border border-green-300 border-solid w-72 p-10'>
            <h1>{title}</h1>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handlePostDetails}>Show Post Details</button>
        </div>
    );
};

export default Post;