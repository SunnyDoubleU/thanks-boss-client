import React from "react";
import styled from 'styled-components';

interface IThemeButtonProps {
    toggleHandler: () => void;
}

const SButton = styled.div`
  width: 300px;
  border-radius: 50px;
  background: ${(props) => (props.theme.colors.button.changeModeButton.background)};
  color: ${(props) => (props.theme.colors.button.changeModeButton.text)};
`;

const ThemeButtonComponent: React.FC<IThemeButtonProps> = ({ toggleHandler }) => {
    return <SButton onClick={toggleHandler}>
        Change Theme
  </SButton>
}

export default ThemeButtonComponent;