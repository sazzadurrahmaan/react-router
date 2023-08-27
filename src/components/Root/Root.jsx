import React from 'react';
import Button from '@mui/material/Button';
const Root = () => {
  return (
    <div>
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
            <li className='my-5'>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </div>
  );
};

export default Root;