import React from 'react'
import './Usercard.css';

const UserCard = ({user}) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Mobile: {user.mobileno}</p>
    </div>
  )
}

export default UserCard