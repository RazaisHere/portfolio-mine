import React from "react";
import "./Contact.css";
const Contactme = () => {
  return (
    <div>
      <div id="contact">
        <h1 className="no-blink">Contact Me</h1>
        <p className="no-blink">
          Please fill out the form below to discuss any work opportunies
        </p>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="no-blink"
        >
          <input
            type="hidden"
            name="access_key"
            value="c04bcb97-62a2-43eb-9950-0ae67703cc12"
          />
          <input name="name" type="text" placeholder="Your Name" />
          <input name="email" type="text" placeholder="Your Email" />
          <textarea
            name="message"
            placeholder="Your Message"
            id="msg"
          ></textarea>
          <button className="submitbtn" type="submit">
            Submit
          </button>
        </form>

        <div className="icon">
          <a href=" https://www.facebook.com/">
            {" "}
            <i class="fa-brands fa-facebook" id="icon1"></i>
          </a>

          <a href="https://www.instagram.com/alinotraza/?hl=en">
            <i class="fa-brands fa-instagram" id="icon2"></i>
          </a>
          <a href="https://discord.com/channels/@me/1267021954117009441/1267785284884365323">
            <i class="fa-brands fa-linkedin-in" id="icon3"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
