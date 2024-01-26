import React from "react";
import "./App.css";
import Grid from "@mui/material/Unstable_Grid2";
import ExpBlock from "./components/ExpBlock";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { beamExperience, ccsExperience, rootExperience } from "./content";
import SkillBlock from "./components/SkillsBlock";
import ContactBlock from "./components/ContactBlock";
import PictureBlock from "./components/PictureBlock";
import NavigationBlock from "./components/NavigationBlock";
const theme = createTheme({
  components: {
    MuiGrid2: {
      defaultProps: {
        // all grids under this theme will apply
        // negative margin on the top and left sides.
        // disableEqualOverflow: true,
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className={"App"}>
        <div className={"header"}>
          <NavigationBlock />
        </div>
        <div className={"body"}>
          <div className={"header-row"}>
            <div className={"column"}>
              <PictureBlock />
              <ContactBlock />
            </div>
            <div className={"column"}>
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
    </ThemeProvider>
  );
}

export default App;
