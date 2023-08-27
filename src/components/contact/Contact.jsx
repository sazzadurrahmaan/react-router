import React from 'react';
import { Form } from "react-router-dom";
import Button from '@mui/material/Button';


const Contact = () => {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div id="contact" className='flex items-center justify-center'>
      <div >
        <img className='rounded-xl mr-10'
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      <div>
        <h1 className='flex font-bold text-3xl '>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
         <span className='text-yellow-500 ml-5'>  <Favorite contact={contact} /></span>
        
        </h1>

        {contact.twitter && (
          <p className='text-2xl text-blue-400'>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p className='mt-5'>{contact.notes}</p>}

        <div className='flex mt-7'>
          <Form action="edit">
          <Button variant="outlined" size="small">Edit</Button>     
          </Form>
          <Form className='ml-5'
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <Button variant="outlined" size="small" color="error">Delete</Button> 
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
};

export default Contact;