import React from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "./styles/themes";
import Home from "./pages/home";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";

const SBackground = styled.div`
  background: ${(props) => props.theme.colors.background};
`;

const SHeader = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: 30px;
`;

export type ThemeType = typeof defaultTheme;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
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
