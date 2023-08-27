import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {

    const posts = useLoaderData();
    return (
        <div>
            <h1>Posts are here</h1>
            {posts.map(post =><Post post={post} key ={post.id}></Post>)}
        </div>
    );
};

export default Posts;