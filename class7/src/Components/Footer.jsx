import React from 'react'
import { useContext } from 'react'
import { UserDataContext } from '../Context/UserContext'

const Footer = () => {
    const data = useContext(UserDataContext);
  return (
    <div className='absolute bottom-0 h-10 w-full bg-blue-500'>
        <h1>{data.name}</h1>
        </div>
  )
}

export default Footer