import "./Intro.css";
import Me from "../../img/me.png";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

import React from "react";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hallo, nama saya</h2>
          <h1 className="i-name">Yusuf Setiyawan</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">Backend Developer</div>
              <div className="i-title-item">React JS</div>
              <div className="i-title-item">Node JS</div>
              <div className="i-title-item">Next JS</div>
              <div className="i-title-item">React Native</div>
            </div>
          </div>

          <p className="i-desc">Self-taught software engineer in the React ecosystem, learn React JS, Next JS, React Native. Builds software that is useful for everyone.</p>
          <div className="i-icon">
            <a href="https://www.linkedin.com/in/yusufstawan/" target="_blank" rel="noreferrer" style={{ color: "blue" }}>
              <BsLinkedin />
            </a>
            <a href="https://github.com/yusufstawan" target="_blank" rel="noreferrer" style={{ color: "black" }}>
              <BsGithub style={{ marginLeft: 15 }} />
            </a>
            <a href="https://www.instagram.com/yusufstawan/" target="_blank" rel="noreferrer" style={{ color: "red" }}>
              <BsInstagram style={{ marginLeft: 15 }} />
            </a>
          </div>
        </div>
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" stroke="grey" className="i-scroll" xmlns="http://www.w3.org/2000/svg">
          <g id="scroll">
            <path id="Vector" d="M40.5 15L34.5 9L28.5 15" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path id="Vector_2" d="M28.5 24L34.5 30L40.5 24" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <g id="Group">
              <path id="Vector_3" d="M9 37.5H60" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <path id="Vector_4" d="M34.5 27V9" strokeWidth="2.9895" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
