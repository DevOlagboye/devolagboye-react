import React from "react";
import "./Projects.css";
import { AiOutlineRise } from "react-icons/ai";
import nftLandPage from "../../assets/images/Landing Page NFT - Apollo NFT (Community).jpg";
import aviationLandPage from "../../assets/images/01_Aviation landing page 1.jpg";
import cocoinLandPage from "../../assets/images/cocoin.jpg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Projects = () => {
  const { ref: myRef, inView: isOnScreen } = useInView();
  const { ref: secondImage, inView: isSecondImageView } = useInView();
  const { ref: thirdImage, inView: isThirdImageView } = useInView({
    threshold: 0.1,
  });
  const { ref: projectText, inView: isProjectTextInView } = useInView();
  const { ref: firstProjectText, inView: isFirstProjectTextInView } = useInView();

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
    show: { opacity: 1, y: -10 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="projects-container"
    >
      <div>
        <motion.h6 variants={item} className="text">
          Selected Projects
        </motion.h6>
      </div>

      <div className="project-details">
        <div className="year first">
          <motion.p variants={item}>2023</motion.p>
        </div>
        <div  className=
              "project-main-details">
          <h5 className="project-name">Mini On-chain Explorer</h5>
          <p className="project-details-text">
            This mini Explorer is a DAPP that fetches on-chain data from the
            Etherscan APIs personalized to a wallet connected.
          </p>
          <p className="project-details-text">
            The solution this DAPP solves is we know how unnecessarily difficult
            it is to fetch on-chain data, by just connecting your wallet you will
            be able to fetch transactions made by your wallet and even check the
            amount of Eth you own in your wallet or any ETH wallet, and the live
            price of ETH and a chart
          </p>
          <a
            href="https://math-scan-mini.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="case-study-link"
          >
            Visit Live <AiOutlineRise className="icon" />
          </a>
        </div>
      </div>

      <div className="project-details">
        <div className="year first">
          <motion.p variants={item}>2023</motion.p>
        </div>
        <div ref={firstProjectText}
        className={
            isFirstProjectTextInView
              ? "project-main-details project-text-animate"
              : "project-main-details"
          } >
          <h5 className="project-name">SafeMoneyUP DEX</h5>
          <p className="project-details-text">
            SafeMoney recently released a new token on BSC, and required a mini
            DEX where community can buy and sell the SMU token.
          </p>
          <p className="project-details-text">
            The main purpose of this DAPP is to be able to buy and sell SMU with
            BNB and be able to see the price of SMU to BNB.
          </p>
          <a
            href="https://safemoney-up-swap-test.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="case-study-link"
          >
            Visit Live <AiOutlineRise className="icon" />
          </a>
        </div>
      </div>

      <div variants={item} className="project-details">
        <div className="year first">
          <motion.p variants={item}>2023</motion.p>
        </div>
        <div
          ref={projectText}
          className={
            isProjectTextInView
              ? "project-main-details project-text-animate"
              : "project-main-details"
          }
        >
          <h5 className="project-name">Apollo NFT MarketPlace</h5>
          <p className="project-details-text">
            Apollo NFT MarketPlace is a project I designed after my interest in
            web3 and its ecosystem.
          </p>
          <p className="project-details-text">
            My love for simple designs and exploring latest designs from Figma
            Community attracted me to this amazing design and because of my plan
            on exploring web3, it became an amazing fit for me to design with
            React.
          </p>
          <a
            href="https://nft-marketplace-landing-page.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="case-study-link"
          >
            Visit Live <AiOutlineRise className="icon" />
          </a>
          <a
            className="image-link"
            target="_blank"
            rel="noreferrer"
            href="https://nft-marketplace-landing-page.netlify.app/"
          >
            <img
              ref={myRef}
              src={nftLandPage}
              alt="NFT Land page"
              className={
                isOnScreen ? "project-image animate" : "project-image "
              }
            />
          </a>
        </div>
      </div>
      <motion.div variants={item} className="project-details">
        <div className="year">
          <p>2022</p>
        </div>
        <div className="project-main-details">
          <h5 className="project-name">Aviation Landing Page</h5>
          <p className="project-details-text">
            FT Plane is a Full Stack Aviation application, it involves booking
            of flights, schedule of flights, and has a backend that works with
            Firebase. Schedules and flight books are all stored in the
            firestore.
          </p>
          <a
            href="https://aviation-landingpage.netlify.app/"
            className="case-study-link"
            target="_blank"
            rel="noreferrer"
          >
            Visit Live <AiOutlineRise className="icon" />
          </a>
          <a
            className="image-link"
            href="https://aviation-landingpage.netlify.app/"
          >
            <img
              ref={secondImage}
              src={aviationLandPage}
              alt="NFT Land page"
              className={
                isSecondImageView
                  ? "project-image animate-second"
                  : "project-image"
              }
            />
          </a>
        </div>
      </motion.div>
      <motion.div variants={item} className="project-details">
        <div className="year">
          <p>2022</p>
        </div>
        <div className="project-main-details">
          <h5 className="project-name">Cocoin Landing Page</h5>
          <p className="project-details-text">
            Cocoin Landing Page is a web3 community oriented page I designed for
            a token community.
          </p>
          <p className="project-details-text">
            I got the inspiration for this from the figma community.
          </p>
          <a
            href="https://cocoin-dapp-interface.netlify.app/"
            className="case-study-link"
            target="_blank"
            rel="noreferrer"
          >
            Visit Live <AiOutlineRise className="icon" />
          </a>
          <a
            className="image-link"
            href="https://cocoin-dapp-interface.netlify.app/"
          >
            <img
              ref={thirdImage}
              src={cocoinLandPage}
              alt="NFT Land page"
              className="project-image"
            />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
