import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_y3rnemd", "template_y3mnqcp", formRef.current, "user_Jp3em3vWzrSIOpu89fcDr").then(
      (result) => {
        console.log(result.text);
        setDone(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title"> Ingin berdiskusi? </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              085-743-099-993 (WhatsApp)
            </div>

            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              yusufstawan@gmail.com
            </div>

            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Sleman, Yogyakarta
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Open to work!</b> Ingin menghubungi saya lebih lanjut. Silahkan isi form berikut:
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input required style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Nama" name="user_name" />
            <input required style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
            <input required style={{ backgroundColor: darkMode && "#333" }} type="email" placeholder="Email" name="user_email" />
            <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Pesan" name="message" />
            <button>Kirim</button>
            {done && "Terima kasih.."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
