import React from "react";
import "./intro.css";
import Bg from "../../assets/backgrundimg.jpg";
import CV from "../../assets/CVUpdated.pdf";
const Intro = () => {
  return (
    <div>
      <section id="intro" className="no-blink">
        <div className="IntroContent ">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="IntroName">Ali Raza</span> <br /> Website
            Developer
          </span>
          <p className="IntroPara">
            I'm a skilled and passionate front-end web developer <br />{" "}
            dedicated to creating user-friendly and visually appealing websites.
          </p>

          <a href={CV} download="Ali_Raza_CV.pdf">
            <button className="Hireme">
              <i className="fa-solid fa-briefcase"></i>
              Download CV
            </button>
          </a>
        </div>
        <img src={Bg} alt="Background" className="Bg" />
      </section>
    </div>
  );
};

export default Intro;
