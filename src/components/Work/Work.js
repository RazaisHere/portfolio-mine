import React from "react";
import "./Work.css";
import TODO from "../../assets/TODO.PNG";
import Quiz from "../../assets/Quiz.PNG";
import QR from "../../assets/QRR.PNG";
import Weather from "../../assets/weather.PNG";
import RPG from "../../assets/RPG.PNG";
import CG from "../../assets/CG.PNG";

const Work = () => {
  const style = {
    width: "100%",
    height: "245px",
  };
  const style2 = {
    width: "100%",
    height: "225px",
  };

  return (
    <div>
      <section id="Work" className="container no-blink">
        <h2 className="workstitle text-center">My Portfolio</h2>
        <p className="workdesc text-center">
          Here are some of the projects I have worked on. Click on the images
          below to explore each webpage in detail and learn more about my
          contributions and the technologies used.
        </p>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="project-item">
              <div className="card">
                <a href="https://razaishere.github.io/TodoList/">
                  <img
                    src={TODO}
                    className="card-img-top"
                    alt="Todo list App"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Todo list App</h5>
                  <p className="card-text">
                    A user-friendly app for managing tasks efficiently, built
                    with HTML, CSS, and JavaScript.
                  </p>
                  <a
                    href="https://razaishere.github.io/TodoList/"
                    className="btnn"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="project-item">
              <div className="card">
                <a href="https://razaishere.github.io/QuizApp/">
                  <img
                    src={Quiz}
                    className="card-img-top "
                    style={style}
                    id="img2"
                    alt="Quiz App"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Simple Quiz App</h5>
                  <p className="card-text">
                    An engaging app for creating and taking quizzes, built with
                    HTML, CSS, and JavaScript.
                  </p>
                  <a
                    href="https://razaishere.github.io/QuizApp/"
                    className="btnn mt-3 mb-3"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="project-item">
              <div className="card">
                <a href="https://razaishere.github.io/QR-Code-Generator/">
                  <img
                    src={QR}
                    className="card-img-top"
                    style={style}
                    alt="QR App"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">QR Code Generator App</h5>
                  <p className="card-text">
                    A simple and efficient app for generating QR codes , built
                    with HTML, CSS, and JavaScript.
                  </p>
                  <a
                    href="https://razaishere.github.io/QR-Code-Generator/"
                    className="btnn mt-3 mb-3"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="project-item">
              <div className="card">
                <a href="https://razaishere.github.io/weather-app/">
                  <img
                    src={Weather}
                    style={style2}
                    className="card-img-top"
                    alt="QR App"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Weaher App</h5>
                  <p className="card-text">
                    A simple and efficient app for checking Weather , built with
                    React js.
                  </p>
                  <a
                    href="https://razaishere.github.io/weather-app/"
                    className="btnn mt-3 mb-3"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="project-item">
              <div className="card">
                <a href="https://razaishere.github.io/RandomPasswordGenerator/">
                  <img
                    src={RPG}
                    style={style2}
                    className="card-img-top"
                    alt="QR App"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Password Generator App</h5>
                  <p className="card-text">
                    Password Generator app build with HTML,CSS and Javascript.
                  </p>
                  <a
                    href="https://razaishere.github.io/RandomPasswordGenerator/"
                    className="btnn mt-3 mb-3"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="project-item">
              <div className="card">
                <a href="https://razaishere.github.io/ColorGuesser/">
                  <img
                    src={CG}
                    style={style2}
                    className="card-img-top"
                    alt="QR App"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Color Guesser App</h5>
                  <p className="card-text">
                    A simple color guess quiz app build with HTML,CSS and
                    Javascript.
                  </p>
                  <a
                    href="https://razaishere.github.io/ColorGuesser/"
                    className="btnn mt-3 mb-3"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
