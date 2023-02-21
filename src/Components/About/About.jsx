import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import firstAboutImage from "../../assets/images/devolagboye.jpg";
import myOutingImage from "../../assets/images/myouting-devolagboye.JPG";
import myDevFestImage from "../../assets/images/devolagboye-devfest.JPG";
import einpunkFavIcon from "../../assets/images/Einpunk Logo white.png";
import devolagboyeFavIcon from "../../assets/images/profile-pic.JPG";
import devOlagboyeInBlack from "../../assets/images/devolagboye-in-black.jpg";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "tween",
        delayChildren: 0.1,
        staggerChildren: 0.1,
        duration: 1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const imagesContainer = {
    nonVisible: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        delayChildren: 0.2,
        staggerChildren: 0.2,
        duration: 2,
      },
    },
  };
  const imagesItems = {
    nonVisible: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="about-container">
      <motion.div
        variants={imagesContainer}
        initial="nonVisible"
        animate="visible"
        className="about-image-container"
      >
        <div className="about-first-image">
          <motion.img
            variants={imagesItems}
            drag
            src={firstAboutImage}
            alt=""
          />
        </div>
        <div className="about-second-image">
          <motion.img variants={imagesItems} drag src={myOutingImage} alt="" />
        </div>
        <div className="about-third-image">
          <motion.img
            variants={imagesItems}
            drag
            src={devOlagboyeInBlack}
            alt="devOlagboye-In-Black"
          />
        </div>
        <div className="about-fourth-image">
          <motion.img variants={imagesItems} drag src={myDevFestImage} alt="" />
        </div>
      </motion.div>
      <div className="about-me-container">
        <div className="about-me-title">
          <motion.img
            drag
            src={devolagboyeFavIcon}
            alt=""
            className="mobile-profile"
          />
          <h5>About me</h5>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="about-me-details"
        >
          <motion.h5 variants={item}>
            <span>Hi there!</span> I'm Olagboye, a Frontend engineer with
            passion & love for designs and its aesthetics. I am a lover of
            minimal, simple and smooth interfaces.
          </motion.h5>
          <motion.h5 variants={item} className="about-work">
            I currently work remotely at{" "}
            <a href="https://safemoney.network">SafeMoney</a>, a web3 community
            as a Frontend Engineer. I currently work with some other startups in
            web2 like Copnow - an E-Commerce Startup as well as Pickbox a
            Logistics Startup.
          </motion.h5>
          <motion.h5 variants={item} className="about-work">
            I am a lover of good designs, as well as stress-free UX, I love
            working with good UI/UX designers, been opportuned to work with some
            in the team as well as from the{" "}
            <a href="https://figma.com/community">Figma Community.</a>
          </motion.h5>
          <motion.h5 variants={item} className="about-work">
            I love action games, football, as well as traveling and adventures,
            when I am outside of work.
          </motion.h5>
        </motion.div>
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
            <a
              href="https://github.com/Einpunk-Protocol/Einpunk-Token-landing-page"
              target="blank"
              className="list-project-link"
            >
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
            <a
              href="https://github.com/Akingbola1234/devolagboye-react"
              target="blank"
              className="list-project-link"
            >
              <div className="list-project-logo">
                <img src={devolagboyeFavIcon} alt="Dev Olagboye Profile" />
              </div>
              <div className="list-project-details">
                <h5 className="list-project-title">Dev Olagboye Portfolio</h5>
                <p className="list-project-description">
                  My Portfolio here was built with React and AntUI.
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
