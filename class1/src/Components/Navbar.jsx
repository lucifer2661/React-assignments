import React from 'react'
import "./Navbar.css";

const Navbar = ({links}) => {
  return (
    <nav className='navbar'>
        <span> Horizon Courts</span>
      <div className="nav-links">
         {links.map(link=>(
            <span key={link}>{link}</span>
         ))}

        
        
        
        </div>  
         <button className="book-btn">Book Now ↗ </button>
    </nav>
  )
}

export default Navbar