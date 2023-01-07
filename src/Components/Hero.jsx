import React from 'react'
import image from "../images/photo-grid.png"

const hero = () => {
  return (
        <section className="hero">
            <img src={image} className="hero--photo" alt="Raod" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
  )
}

export default hero