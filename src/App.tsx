import "./App.css";
import ExpBlock from "./components/ExpBlock";
import { Box } from "@mui/material";
import { beamExperience, ccsExperience, rootExperience } from "./content";
import NavigationBlock from "./components/NavigationBlock";
import beamLogo from "./assets/images/beamLogo.png";
import rootLogo from "./assets/images/rootLogo.png";
import ccsLogo from "./assets/images/ccsLogo.png";
import IntroBlock from "./components/IntroBlock";
import SkillsBlock from "./components/SkillsBlock";
import FooterBlock from "./components/FooterBlock";
import ContactBlock from "./components/ContactBlock";

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
              <button className={"styled-button"}>About me</button>
            </div>
          </div>
        </div>
        <div className={"threshold"} />
        <div className={"body-row"}>
          <div className={"info-block"}>
            <SkillsBlock />
          </div>
        </div>
        <div className={"body-block"}>
          {/*TODO extract this into the experience component*/}
          <div className={"row about-me-text-large"}>Where I've been...</div>
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
        <div className={"body-block"}>
          <ContactBlock />
        </div>
        <div className={"footer"}>
          <FooterBlock />
        </div>
      </div>
    </Box>
  );
}

export default App;
