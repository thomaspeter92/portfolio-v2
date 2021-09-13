import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import CssReset from "./CssReset";
import Typography from "./Typography";
import Color from "./Colors";


const theme = {
// no theme yet
}

const ThemeProvider = ({ children }) => (
    <StyledThemeProvider theme={theme}>
      <CssReset />
      <Typography />
      <Color />
     
      {children}
    </StyledThemeProvider>
  );
  
export default ThemeProvider;
  