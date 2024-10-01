
import React from 'react';
import './ShowUser.css'

const ShowUser = (props) => {
  const { user } = props
  // console.log('ShowUser', user)
  
  return (
   
    <ul className='show-user'>
      <li><span>Name: </span>{user.fname} {user.lname}</li>
      <li><span>City: </span>{user.city}</li>
      <li><span>Website: </span>{user.website}</li>
      <li><span>Date: </span>{user.created_at}</li>
    </ul>
  
  );
}

export default ShowUser;
// Mouldi