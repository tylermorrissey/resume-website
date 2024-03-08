import "./App.css";
import { Box } from "@mui/material";
import IntroBlock from "./components/IntroBlock";
import SkillsBlock from "./components/SkillsBlock";
import FooterBlock from "./components/FooterBlock";
import ContactBlock from "./components/ContactBlock";
import ExperienceBlock from "./components/ExperienceBlock";

function App() {
  return (
    <Box className={"App"}>
      <div className={"body"}>
        <div className={"loading-screen"} />
        <div className={"picture-block"} />
        <IntroBlock />
        <div className={"threshold"} />
        <SkillsBlock />
        <ExperienceBlock />
        <ContactBlock />
        <FooterBlock />
      </div>
    </Box>
  );
}

export default App;
