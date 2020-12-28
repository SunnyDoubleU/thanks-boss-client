import React from 'react'
import styled from 'styled-components'

interface IThemeButtonProps {
    toggleHandler: () => void
    isDefaultTheme: boolean
}

const SButtonContainer = styled.div<{ isDefaultTheme: boolean }>`
    width: 60px;
    height: 30px;
    border-radius: 50px;
    background: ${(props) => props.theme.colors.button.changeModeButton.background};
    display: flex;
    position: relative;
`
const SToggleButton = styled.div<{ isDefaultTheme: boolean }>`
    background: ${(props) => props.theme.colors.button.changeModeButton.button};
    border-radius: 50px;
    border: 2px solid ${(props) => props.theme.colors.button.changeModeButton.background};
    height: 100%;
    width: 50%;
    position: absolute;
    ${(props) => (props.isDefaultTheme ? 'left: 0;' : 'left: 50%;')}
    transition: all ease-in-out 0.2s;
`

const ThemeButtonComponent: React.FC<IThemeButtonProps> = ({ toggleHandler, isDefaultTheme }) => {
    return (
        <SButtonContainer onClick={toggleHandler} isDefaultTheme={isDefaultTheme}>
            <SToggleButton isDefaultTheme={isDefaultTheme} />
        </SButtonContainer>
    )
}

export default ThemeButtonComponent
