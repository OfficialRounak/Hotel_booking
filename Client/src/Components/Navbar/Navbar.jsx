import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container-navbar">
            <span className='logo'>Hotel_Booking</span>
            <div className="navItems">
                <button className='navButtons'>Register</button>
                <button className='navButtons'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar