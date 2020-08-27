import React from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "./styles/themes";
import Home from "./pages/home";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./styles/globalStyle";

const SBackground = styled.div`
  background: ${(props) => props.theme.colors.background};
`;

const SHeader = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: 30px;
`;

const SButton = styled.div<{ theme: string }>`
  /* padding: 10; */
  border-radius: 50px;
  background: ${(props) => (props.theme === "true" ? "#cdcdcd" : "#444444")};
  color: ${(props) => (props.theme === "true" ? "#444444" : "#cdcdcd")};
`;

export type ThemeType = typeof defaultTheme;

const App: React.FC = () => {
  const [theme, setTheme] = useState(defaultTheme);
  const [isDefaultTheme, setIsDefaultTheme] = useState(true);
  const toggleHandler = () => {
    setIsDefaultTheme(!isDefaultTheme);
    if (isDefaultTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(defaultTheme);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SButton theme={isDefaultTheme.toString()} onClick={toggleHandler}>
        Change Theme
      </SButton>
      <Router>
        <SHeader>Thanks Boss</SHeader>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
