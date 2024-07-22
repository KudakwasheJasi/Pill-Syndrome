import React from 'react'
import logo from '../assets/IMAGES/logo 1.png'
import search from '../assets/IMAGES/Types=search, Icon Size=16, Icon Icor=White.svg'
import cart from '../assets/IMAGES/Types=shopping-cart, Icon Size=16, Icon Icor=White.svg'

export const Navbar = () => {
  return (
  
    <>
    
    <div id ="navbar">
      <div className="navbar-container">
        <img src= {logo} alt="" />
          <ul>
            <li>Categories</li>
            <li>Cart</li>
            <div className="cart">
            <img src={cart} alt="" />
          </div>
          </ul>
          <div className="search">
            <img src= {search} alt="" />
          </div>
          <div className="search-container">
            <h6>Connect Wallet</h6>
          </div>
      </div>
    </div>
    </>
  )
}


export default Navbar
