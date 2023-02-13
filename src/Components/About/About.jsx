import React from "react";
import "./About.css";
import firstAboutImage from "../../assets/images/devolagboye.jpg";
import myOutingImage from "../../assets/images/myouting-devolagboye.JPG";
import myDevFestImage from "../../assets/images/devolagboye devfest.JPG";
import einpunkFavIcon from "../../assets/images/Einpunk Logo white.png";

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
            I currently work remotely at{" "}
            <a href="https://safemoney.network">SafeMoney</a>, a web3 community
            as a Frontend Engineer. I currently work with some other startups in
            web2 like Copnow - an E-Commerce Startup as well as Pickbox a
            Logistics Startup.
          </h5>
          <h5 className="about-work">
            I am a lover of good designs, as well as stress-free UX, I love
            working with good UI/UX designers, been opportuned to work with some
            in the team as well as from the{" "}
            <a href="https://figma.com/community">Figma Community.</a>
          </h5>
          <h5 className="about-work">
            I love action games, football, as well as traveling and adventures,
            when I am outside of work.
          </h5>
        </div>
      </div>
      <div className="connect-container">
        <div className="connect-title">
          <h5>Connect</h5>
        </div>
        <div className="connect-links">
          <a href="##">Email</a>
          <a href="https://twitter.com/devolagboye">Twitter</a>
          <a href="https://github.com/Akingbola1234">GitHub</a>
        </div>
      </div>
      <div className="side-projects-container">
        <div className="side-projects-title">
          <h5>Side Projects</h5>
        </div>
        <div className="side-projects">
          <h5>Worked on some other side projects</h5>
          <div className="list-project-container">
            <a href="https://github.com/Einpunk-Protocol/Einpunk-Token-landing-page" target="blank" className="list-project-link">
              <div className="list-project-logo">
                <img src={einpunkFavIcon} alt="Einpunk Logo" />
              </div>
              <div className="list-project-details">
                <h5 className="list-project-title">Einpunk Token Protocol</h5>
                <p className="list-project-description">
                  Einpunk Token Protocol landing page was built with React and
                  AntUI.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
