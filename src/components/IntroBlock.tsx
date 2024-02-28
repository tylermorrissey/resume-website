import React from "react";
import "../assets/css/IntroBlock.css";

function IntroBlock() {
  return (
    <div className={"intro-text-container"}>
      <div className={"intro-bg"}></div>
      <div className={"intro-text-row"}>
        <div className={"intro-text intro-text-large"}>Hey, I'm Tyler -</div>
      </div>
      <div className={"intro-text-row"}>
        <div className={"intro-text intro-text-small"}>
          a seasoned full stack software engineer with dedication to writing
          clean, efficient code, an insatiable appetite for learning, and a
          passion for mentorship.
        </div>
      </div>
    </div>
  );
}

export default IntroBlock;
