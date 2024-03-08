import React from "react";
import "../assets/css/NavigationBlock.css";
import db from "../assets/images/db.svg";

function NavigationBlock() {
  return (
    <div className="navbar">
      <div className={"left-nav"}>
        {/*<img*/}
        {/*  className="logo"*/}
        {/*  style={{ width: 25, height: 25 }}*/}
        {/*  src={db}*/}
        {/*  alt="gmail.logo"*/}
        {/*/>*/}
        <a className={"logo-link"}>tm</a>
      </div>
      <div className={"right-nav"}>
        <a className={"link"}>skills</a>
        <a className={"link"}>experience</a>
        <a className={"link"}>contact</a>
      </div>
    </div>
  );
}

export default NavigationBlock;
