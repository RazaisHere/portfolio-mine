import React from "react";
import Frontend from "../../assets/frontend.jpg";
import Bootstrap from "../../assets/Bootstrap.jpg";
import Reactt from "../../assets/React.jpg";
import "./skill.css";
const skill = () => {
  return (
    <div>
      <section id="skill" className="no-blink">
        <span className="skilltitle">What I Do</span>
        <span className="SkillDesc">
          I'm a passionate front-end web developer dedicated to creating
          user-friendly and visually appealing websites. I have strong
          understanding of designs and a keen eye for detail. I am proficient in
          HTML,CSS, Javascript and Bootstrap and have understanding of React.js
        </span>
        <div className="SkillBars">
          <div className="skillbar">
            <img src={Frontend} alt="" className="skillbarimg1" />
            <div className="skillbartext">
              <h3>Front End Technologies</h3>
              <p>
                I specialize in front-end development, focusing on crafting
                seamless and interactive user experiences using HTML, CSS, and
                JavaScript.
              </p>
            </div>
          </div>
          <div className="skillbar">
            <img src={Bootstrap} alt="" className="skillbarimg2" />
            <div className="skillbartext">
              <h3>Bootstrap</h3>
              <p>
                I utilize Bootstrap to build responsive, mobile-first websites
                quickly, ensuring consistent and attractive design across
                different devices and screen sizes.
              </p>
            </div>
          </div>
          <div className="skillbar">
            <img src={Reactt} alt="" className="skillbarimg3" />
            <div className="skillbartext">
              <h3>React.js </h3>
              <p>
                I develop dynamic and scalable web applications using React.js,
                leveraging its component-based architecture to create efficient
                and maintainable code.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default skill;
