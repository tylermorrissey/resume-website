import React from "react";
import "./App.css";
import ExpBlock from "./components/ExpBlock";
import { Box } from "@mui/material";
import { beamExperience, ccsExperience, rootExperience } from "./content";
import SkillBlock from "./components/SkillsBlock";
import ContactBlock from "./components/ContactBlock";
import PictureBlock from "./components/PictureBlock";
import NavigationBlock from "./components/NavigationBlock";

function App() {
  return (
    <Box className={"App"}>
      <div className={"header"}>
        <NavigationBlock />
      </div>
      <div className={"body"}>
        <div className={"body-row"}>
          <div className={"column"}>
            <PictureBlock />
            <ContactBlock />
          </div>
          <div className={"skills-column"}>
            <SkillBlock />
          </div>
        </div>
        <div className={"column"}>
          <ExpBlock
            heading={"Beam Benefits"}
            content={beamExperience}
            size={6}
          />
          <ExpBlock
            heading={"Root Insurance"}
            content={rootExperience}
            size={6}
          />
          <ExpBlock
            heading={"Columbus City Schools"}
            content={ccsExperience}
            size={12}
          />
        </div>
      </div>
    </Box>
  );
}

export default App;
