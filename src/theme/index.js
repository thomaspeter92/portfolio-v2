import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Typography from "./Typography";
// import Color from "./Colors";


const theme = {
  orange: "#F1931B",
  cream: "#F1E9E8",
  navy: "#042537",
  teal: "#1B718A",
}

const ThemeProvider = ({ children }) => (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <Typography />
      {/* <Color /> */}
     
      {children}
    </StyledThemeProvider>
  );
  
export default ThemeProvider;
  