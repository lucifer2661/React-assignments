import React from 'react'
import { useContext } from 'react'
import { UserDataContext } from '../Context/UserContext'

const Navbar = () => {
    const data =useContext(UserDataContext);
  return (
    <div className='h-10 w-full bg-blue-500'>
        <h1>{data.email} </h1>
        </div>
  )
}

export default Navbar