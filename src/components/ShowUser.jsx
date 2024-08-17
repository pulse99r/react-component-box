
import React from 'react';
import './ShowUser.css'

const ShowUser = (user) => {

  console.log('ShowUser', user)
  
  return (
   
    <ul className='show-user'>
      <li><span>Name: </span>{user.user.fname} {user.user.lname}</li>
      <li><span>City: </span>{user.user.city}</li>
      <li><span>Website: </span>{user.user.website}</li>
      <li><span>Date: </span>{user.user.date}</li>
    </ul>
  
  );
}

export default ShowUser;
