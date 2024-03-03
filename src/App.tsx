import React from "react";
import "./App.css";
import ExpBlock from "./components/ExpBlock";
import { Box, Button } from "@mui/material";
import { beamExperience, ccsExperience, rootExperience } from "./content";
import SkillBlock from "./components/SkillsBlock";
import ContactBlock from "./components/ContactBlock";
import PictureBlock from "./components/PictureBlock";
import NavigationBlock from "./components/NavigationBlock";
import beamLogo from "./assets/images/beamLogo.png";
import rootLogo from "./assets/images/rootLogo.png";
import ccsLogo from "./assets/images/ccsLogo.png";
import IntroBlock from "./components/IntroBlock";
import SkillsBlock from "./components/SkillsBlock";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Box className={"App"}>
      <div className={"body"}>
        <div className={"picture-block"}></div>
        <div className={"landing"}>
          <div className={"landing-content"}>
            <div className={"header"}>
              <NavigationBlock />
            </div>
            <IntroBlock />
            <div className={"intro-footer"}>
              <button className={"styled-button"}>About Me</button>
            </div>
          </div>
        </div>
        <div className={"threshold"}></div>

        <div className={"body-block"}>
          <AboutMe />
          <SkillsBlock />
        </div>
        <div className={"body-block"}>
          <ExpBlock
            heading={"Beam Benefits"}
            content={beamExperience}
            image={beamLogo}
            imgClassName={"beam-exp-image"}
          />
          <ExpBlock
            heading={"Root Insurance"}
            content={rootExperience}
            image={rootLogo}
            imgClassName={"root-exp-image"}
          />
          <ExpBlock
            heading={"Columbus City Schools"}
            content={ccsExperience}
            image={ccsLogo}
            imgClassName={"ccs-exp-image"}
          />
        </div>
      </div>
    </Box>
  );
}

export default App;
