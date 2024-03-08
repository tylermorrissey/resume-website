import "../assets/css/AboutMe.css";
import React from "react";

function AboutMe() {
  return (
    <>
      <div className={"about-me-column"}>
        <div className={"about-me-text-title"}>
          <div className={"about-me-text-large"}>What I've been up to...</div>
        </div>
        <div className={"about-me-text-content"}>
          <div className={"about-me-text-small"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lacinia, quam viverra accumsan tristique, nunc lectus pellentesque
            urna, in fringilla est erat ut ex. Quisque a diam neque. Cras quis
            fringilla tellus. Maecenas eleifend cursus tempor. Sed dignissim
            porttitor diam, sit amet porta magna sodales ac. Vivamus cursus,
            nisl sed fermentum tempus, metus tellus eleifend elit, at sagittis
            arcu eros sit amet ante. Curabitur nec sem ipsum. Mauris eget orci
            lacinia arcu elementum faucibus ut quis tellus.
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
