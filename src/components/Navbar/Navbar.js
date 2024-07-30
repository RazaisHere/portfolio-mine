import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { Link } from "react-scroll";
// const Navbar = () => {
//   return (
//     <div>
//       <nav className="navbar">
//         <img src={logo} className="logo" />
//         <div className="desktop-menu">
//           <Link className="desktopmenulistitem">Home</Link>
//           <Link className="desktopmenulistitem">About</Link>
//           <Link className="desktopmenulistitem">Portfolio</Link>
//         </div>
//         <button className="desktopbtn">
//           <i class="fa-regular fa-address-card"></i>
//           Contact Me
//         </button>
//       </nav>
//     </div>
//   );
// };
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar no-blink">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#intro">
          <img src={logo} className="logo" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active-link "
                to="intro"
                spy={true}
                smooth={true}
                offset={-150}
                duration={100}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="skill"
                activeClass="active-link "
                spy={true}
                smooth={true}
                offset={-150}
                duration={150}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="Work"
                activeClass="active-link "
                spy={true}
                smooth={true}
                offset={-100}
                duration={150}
              >
                Portfolio
              </Link>
            </li>
          </ul>
          <a href="#contact">
            <button className="btn btn-outline-light contact-btn">
              <i className="fa-regular fa-address-card"></i> Contact Me
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
