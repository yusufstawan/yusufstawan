import React from "react";
import "./About.css";
import Awards from "../../img/uny.png";
import Kelas from "../../img/kelas.png";
import CV from "../../img/file/CV_Yusuf_Setiyawan.pdf";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Kelas} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Apart from learning to develop websites, I also write about website technology on my blog: {""}
          <br />
          <a href="http://kelasweb.id/" target="_blank" rel="noreferrer">
            <button className="a-kelasweb">My Blog: KelasWeb</button>
          </a>{" "}
        </p>
        <p className="a-desc">I studied at Universitas Negeri Yogyakarta with the Electronic Engineering Education Study Program, worked in the customer service field until finally I found my passion in the Software Engineer field.</p>
        <a href={CV} download="CV-Yusuf-Setiyawan.pdf">
          <button className="a-download">Download CV</button>
        </a>
        <div className="a-award">
          <img src={Awards} alt="" className="a-award-img" />
          <div className="a-awards-texts">
            <h4 className="a-award-title">Universitas Negeri Yogyakarta</h4>
            <p className="a-award-desc">Pendidikan Teknik Elektronika</p>
            <p className="a-award-desc">2015 - 2019 (IPK 3.54)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
