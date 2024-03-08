import React from "react";
import "../assets/css/NavigationBlock.css";

function NavigationBlock() {
  return (
    <div className="navbar">
      <div className={"left-nav"}>
        <a className={"logo-link"}>tm</a>
      </div>
      <div className={"right-nav"}>
        <a href={"#skills-block"} className={"link"}>
          skills
        </a>
        <a href={"#exp-block"} className={"link"}>
          experience
        </a>
        <a href={"#contact-block"} className={"link"}>
          contact
        </a>
      </div>
    </div>
  );
}

export default NavigationBlock;
