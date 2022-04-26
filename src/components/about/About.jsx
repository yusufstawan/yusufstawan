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
        <h1 className="a-title">Tentang Saya</h1>
        <p className="a-sub">
          Selain belajar saya juga membangun website saya sendiri yaitu: {""}
          <a href="http://kelasweb.id/" target="_blank" rel="noreferrer">
            <button className="a-kelasweb">Kelas Web</button>
          </a>{" "}
        </p>
        <p className="a-desc">
          Saya menempuh pendidikan di Universitas Negeri Yogyakarta dengan Prodi Pendidikan Teknik Elektronika, sempat bekerja pada bidang customer service hingga akhirnya menemukan passion saya pada bidang Software Engineer.
        </p>
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
