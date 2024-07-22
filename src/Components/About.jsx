import React from 'react'
import rectangle104 from '../assets/IMAGES/Rectangle 104.png'

const About = () => {
  return (
  
    <>
    <div id ="about-container">
          <div className="pill">
         <h2><span>Pill Syndrome</span><br/>Merch Store</h2>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore rem quidem iste? Modi voluptatem repellendus quod quos vel qui fuga atque consequuntur ad distinctio cupiditate possimus aut, excepturi placeat unde nulla debitis rerum molestiae earum porro?</p>
          <div className="button-group">
         <button>Connect Wallet</button>
         </div>
         </div>
         <div className="about-image">
            <img src= {rectangle104} alt="" />
         </div>
    </div>
    
    </>
  )
}

export default About