import React from 'react'
import "./About.css"
import firstAboutImage from "../../assets/images/devolagboye.jpg"

const About = () => {
  return (
    <div className="about-container">
        <div className="about-image-container">
            <div className='about-first-image'>
                <img src={firstAboutImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About