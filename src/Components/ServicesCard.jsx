import React from 'react'
import data from '../../data/data'

const ServicesCard = () => {
  return (
    <>
    
    {data && data.ServicesCard.map(card =>{

        return(
            <div className="ServiceCard">
                <div className="img">
                    <img src= {card.Image} alt="" />
                    <div className="textBox">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                    <a href=''>{card.link}</a>
                </div>
                </div>
            </div>
        )
    })}
    </>
  )
}

export default ServicesCard