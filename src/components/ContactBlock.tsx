import React from "react";
import "../assets/css/ContactBlock.css";
import gmailLogo from "../assets/images/gmail-logo.png";
import githubLogo from "../assets/images/github-logo.png";

function ContactBlock() {
  return (
    <div className="contactContent">
      <div className="name">Tyler Morrissey</div>
      <div className="title">Software Engineer</div>
      <div className="logos">
        <div className="gmail">
          <img
            className="logo"
            style={{ width: 25, height: 25 }}
            src={gmailLogo}
            alt="gmail.logo"
          />
        </div>
        <div className="github">
          <a href="https://github.com/tylermorrissey">
            <img
              className="logo"
              style={{ width: 25, height: 25 }}
              src={githubLogo}
              alt="gmail.logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactBlock;
