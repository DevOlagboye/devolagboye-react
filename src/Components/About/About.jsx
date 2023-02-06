import React from "react";
import "./About.css";
import firstAboutImage from "../../assets/images/devolagboye.jpg";
import myOutingImage from "../../assets/images/myouting-devolagboye.JPG";
import myDevFestImage from "../../assets/images/devolagboye devfest.JPG"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image-container">
        <div className="about-first-image">
          <img src={firstAboutImage} alt="" />
        </div>
        <div className="about-second-image">
          <img src={myOutingImage} alt="" />
        </div>
        <div className="about-third-image">
          <img src={firstAboutImage} alt="" />
        </div>
        <div className="about-fourth-image">
          <img src={myDevFestImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
