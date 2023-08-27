import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root/Root";
import '@fontsource/roboto/400.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Contact from './components/contact/Contact';
import Users from './components/Users/Users';
import User from './components/User/User';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "contacts/:contactId",
        element:<Contact></Contact>,
       
      },
      {
        path: "/users",
        element:<Users></Users>,
        loader : () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "user/:userId",
        element:<UserDetails></UserDetails>,
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
      {
        path: "posts",
        element:<Posts></Posts>,
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: "post/:postId",
        element: <PostDetails></PostDetails>,
        loader : ({params} ) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: "*",
        element: <div>404 page not found</div>,
      },

    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
