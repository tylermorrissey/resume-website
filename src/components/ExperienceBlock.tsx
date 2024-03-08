import React from "react";
import ExpTile from "./ExpTile";
import { beamExperience, ccsExperience, rootExperience } from "../content";
import beamLogo from "../assets/images/beamLogo.png";
import rootLogo from "../assets/images/rootLogo.png";
import ccsLogo from "../assets/images/ccsLogo.png";
function ExperienceBlock() {
  return (
    <>
      <div id={"exp-block"} className={"body-block"}>
        <div className={"row about-me-text-large"}>Where I've been...</div>
        <ExpTile
          heading={"Beam Benefits"}
          content={beamExperience}
          image={beamLogo}
          imgClassName={"beam-exp-image"}
        />
        <ExpTile
          heading={"Root Insurance"}
          content={rootExperience}
          image={rootLogo}
          imgClassName={"root-exp-image"}
        />
        <ExpTile
          heading={"Columbus City Schools"}
          content={ccsExperience}
          image={ccsLogo}
          imgClassName={"ccs-exp-image"}
        />
      </div>
    </>
  );
}

export default ExperienceBlock;
