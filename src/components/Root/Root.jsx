import React from 'react';
import Button from '@mui/material/Button';
import { Outlet, Link} from "react-router-dom";

const Root = () => {
  
  return (
    <>
    <div>
      <nav>
        <ul className='text-blue-800 p-10'>
          <Link to="/">Home</Link>
          <Link to="users">Users</Link>
          <Link to="posts">Posts</Link>
        </ul>
      </nav>
    </div>
        <div className='grid grid-cols-3'>
       <div id="sidebar" className='pt-5 pl-6 bg-gray-100 p-11 w-96 h-screen'>
        <div className='flex '>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <div className='ml-5'>
              <Button variant="contained"> New</Button>
            </div>
          
          </form>
        </div>
        <nav className='mt-10 text-lg font-medium	'>
        <ul>
            <li>
            <Link to={`users/1`}>Your Name</Link>
            </li>
            <li>
            <Link to={`users/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
      <Outlet />
      </div>
    </div>
    </>

  );
};

export default Root;