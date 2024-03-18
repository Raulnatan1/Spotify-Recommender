import { ThemeProvider } from "styled-components";
import { Router } from "./router";
import { GlobalStyle } from "./theme/globalStyle";
import { theme } from "./theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}
