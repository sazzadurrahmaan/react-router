import React from 'react';
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  
    return (
<div className="flex items-center justify-center h-screen text-2xl">
  <div id="error-page" className="text-center">
    <h1 className='font-bold text-3xl my-5'>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>
      <i>{error.statusText || error.message}</i>
    </p>
  </div>
</div>

    );
};

export default ErrorPage;