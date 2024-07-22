import React from 'react'
import syndrome from '../assets/IMAGES/logo 1.png'

const Contact = () => {
  return (
    
    <>
    
   <div id="contact">
    <div className="contact-container">
        <div className="syndrome-text">
            <img src= {syndrome} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, atque culpa id ab enim, hic, qui officiis nesciunt voluptate eum esse. Porro cum nisi reiciendis architecto pariatur vitae ipsa illo.</p>
        </div>
        <div className="syndrome-text1">
          <h3>Quick Links</h3>
          <p>Connect Wallet<br/> Merchandise<br/>Promotion</p>
        </div>
        <div className="rome-text2">
          <h3>Subscribe For Merch Discount Updates</h3>
          <div className="all-rome">
            <form action="" method="get">
          <input type="email" placeholder='your email here' name="" id="" />
          <input type="submit" value="Subscribe"  className='btn'/>
          </form>
          </div>
        </div>
    </div>
    <div className="copy">
       <p>&copy; 2022 Pill Syndrome. All rights reserved</p>
    </div>
   </div>
    </>
  )
}

export default Contact