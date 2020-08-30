import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "./styles/themes";
import Home from "./pages/home/index";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./styles/globalStyle";


const SHeader = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: 30px;
`;

const SButton = styled.div`
  width: 300px;
  border-radius: 50px;
  background: ${(props) => (props.theme.colors.button.changeModeButton.background)};
  color: ${(props) => (props.theme.colors.button.changeModeButton.text)};
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
      <SButton onClick={toggleHandler}>
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
