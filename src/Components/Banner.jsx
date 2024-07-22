import React from 'react'
import rectangle85 from '../assets/IMAGES/Rectangle 85.png'
import rectangle86 from '../assets/IMAGES/Rectangle 86.png'
import rectangle87 from '../assets/IMAGES/Rectangle 87.png'

const Banner = () => {
  return (
   
     <>
     
     <div id ="Banner">
         <div className="banner-container">
               <div className="picture1">
            <img src= {rectangle85} alt="" />
                <div className="group1">
            <button>Buy Shirt Merch</button>
            </div>
            </div>
              <div className="picture2">
                <div className="picture2-group"></div>
            <img src= {rectangle86} alt="" />
            </div>
             <div className="picture3">
            <img src= {rectangle87} alt="" />
                <div className="group3">
            <button>Buy Hoodie Merch</button>
            </div>
            </div>
         </div>
     </div>
     </>
  )
}

export default Banner