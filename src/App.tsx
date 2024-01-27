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

function App() {
  return (
    <Box className={"App"}>
      <div className={"header"}>
        <NavigationBlock />
      </div>
      <div className={"body"}>
        <div className={"about-me"}>
          <div className={"body-row"}>
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
          />
          <ExpBlock
            heading={"Root Insurance"}
            content={rootExperience}
            image={rootLogo}
          />
          <ExpBlock
            heading={"Columbus City Schools"}
            content={ccsExperience}
            image={ccsLogo}
          />
        </div>
      </div>
    </Box>
  );
}

export default App;
