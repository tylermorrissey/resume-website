import React from "react";
import "./App.css";
import ExpBlock from "./components/ExpBlock";
import { Box } from "@mui/material";
import { beamExperience, ccsExperience, rootExperience } from "./content";
import SkillBlock from "./components/SkillsBlock";
import ContactBlock from "./components/ContactBlock";
import PictureBlock from "./components/PictureBlock";
import NavigationBlock from "./components/NavigationBlock";
import beamLogo from "./assets/images/beamLogo.png";
import rootLogo from "./assets/images/rootLogo.png";
import ccsLogo from "./assets/images/ccsLogo.png";
import IntroBlock from "./components/IntroBlock";

function App() {
  return (
    <Box className={"App"}>
      <div className={"body"}>
        <div className={"landing section"}>
          <div className={"landing-content"}>
            <div className={"header"}>
              <NavigationBlock />
            </div>
            <IntroBlock />
          </div>
        </div>
        <div className={"body-row"}>
          <div className={"about-me section"}>
            <div className={"column"}>
              <PictureBlock />
              <ContactBlock />
            </div>
            <div className={"skills-column"}>
              <SkillBlock />
            </div>
          </div>
        </div>
        <div className={"experience-block"}>
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
