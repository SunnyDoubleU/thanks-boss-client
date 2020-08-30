import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "./styles/themes";
import Home from "./pages/home/index";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./styles/globalStyle";
import ThemeButton from "./components/common/themeButton/index";
import TempNavigation from "./components/common/navigation/index";


const SHeader = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: 30px;
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
      <ThemeButton toggleHandler={toggleHandler} />
      <TempNavigation />
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
