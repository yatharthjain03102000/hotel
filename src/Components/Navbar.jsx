import React from 'react'
import navbarimage from "../images/airbnb-logo.png"


const Navbar = () => {
  return (
    <nav>
        <img src={navbarimage} className="nav--logo" alt='AIRBNB' />
    </nav>
  )
}

export default Navbar