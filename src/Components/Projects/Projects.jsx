import React from "react";
import "./Projects.css";
import { AiOutlineRise } from "react-icons/ai";
import nftLandPage from "../../assets/images/Landing Page NFT - Apollo NFT (Community).png";
import aviationLandPage from "../../assets/images/01_Aviation landing page 1.png";
import cocoinLandPage from "../../assets/images/cocoin.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <div>
        <h6 className="text">Selected Projects</h6>
      </div>
      <div className="project-details">
        <div className="year">
          <p>2023</p>
        </div>
        <div className="project-main-details">
          <h5 className="project-name">Apollo NFT MarketPlace</h5>
          <p className="project-details">
            Apollo NFT MarketPlace is a project I designed after my interest in
            web3 and its ecosystem.
          </p>
          <p className="project-details">
            I got the inspiration for this from the figma community.
          </p>
          <a href="https://nft-marketplace-landing-page.netlify.app/" target="_blank" rel="noreferrer" className="case-study-link">
            Visit Live <AiOutlineRise className="icon" />
          </a>

          <a
            className="image-link" target="_blank" rel="noreferrer"
            href="https://nft-marketplace-landing-page.netlify.app/"
          >
            <img
              src={nftLandPage}
              alt="NFT Land page"
              className="project-image"
            />
          </a>
        </div>
      </div>
      <div className="project-details">
        <div className="year">
          <p>2022</p>
        </div>
        <div className="project-main-details">
          <h5 className="project-name">Aviation Landing Page</h5>
          <p className="project-details">
            Aviation landing page is a project based on aviation, booking
            flights etc
          </p>
          <p className="project-details">
            I got the inspiration for this from the figma community.
          </p>
          <a href="##" className="case-study-link">
            Visit Live <AiOutlineRise className="icon" />
          </a>
          <a
            className="image-link"
            href="https://aviation-landingpage.netlify.app/"
          >
            <img
              src={aviationLandPage}
              alt="NFT Land page"
              className="project-image"
            />
          </a>
        </div>
      </div>
      <div className="project-details">
        <div className="year">
          <p>2022</p>
        </div>
        <div className="project-main-details">
          <h5 className="project-name">Cocoin Landing Page</h5>
          <p className="project-details">
            Cocoin Landing Page is a community oriented page I designed for a
            token community.
          </p>
          <p className="project-details">
            I got the inspiration for this from the figma community.
          </p>
          <a href="##" className="case-study-link">
            Visit Live <AiOutlineRise className="icon" />
          </a>
          <a
            className="image-link"
            href="https://cocoin-dapp-interface.netlify.app/"
          >
            <img
              src={cocoinLandPage}
              alt="NFT Land page"
              className="project-image"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
