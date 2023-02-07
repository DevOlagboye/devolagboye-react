import React from "react";
import "./About.css";
import firstAboutImage from "../../assets/images/devolagboye.jpg";
import myOutingImage from "../../assets/images/myouting-devolagboye.JPG";
import myDevFestImage from "../../assets/images/devolagboye devfest.JPG";

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
      <div className="about-me-container">
        <div className="about-me-title">
          <h5>About me</h5>
        </div>
        <div className="about-me-details">
          <h5>
            <span>Hi there!</span> I'm Olagboye, a Frontend engineer with
            passion & love for designs and its aesthetics. I love building
            simple and smooth interfaces.
          </h5>
          <h5 className="about-work">
            I currently work part-time at{" "}
            <a href="https://safemoney.network">Safemoney</a>, a web3 community
            as a Frontend Engineer. I currently work with some other startups in
            web2 like Copnow - an E-Commerce Startup as well as Pickbox a
            Logistics Startup.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default About;
