import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
const PostDetails = () => {
    const post =  useLoaderData();
    const navigate = useNavigate();

    const handleGoBack=() => {
        navigate(-1);
    }
    return (
        <div>
            <h1>Post user Id :{post.userId}</h1>
            <h2>Post Title :{post.title}</h2>
            <p>Post Body :{post.body}</p>
         <span onClick={handleGoBack}><Button variant="contained" size="small">Go Back</Button></span> 
        </div>
    );
};

export default PostDetails;