import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SMainContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    background: ${(props) => props.theme.colors.background.tertiary};
`

const SLink = styled(NavLink)`
    color: white;
    margin-left: 5px;
`

const Navigation: React.FC = () => {
    return (
        <SMainContainer>
            <SLink to={'/'}>Home</SLink>
            <SLink to={'/events'}>Events</SLink>
            <SLink to={'/events/all'}>All Events</SLink>
        </SMainContainer>
    )
}

export default Navigation
