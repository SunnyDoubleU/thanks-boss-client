import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { logoutUser } from '../../../../src/functions'
import { useHistory } from 'react-router-dom'
import { apiAuthentication } from '../../../api/apiAuthentication'

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
const SLogOut = styled.div`
    color: white;
    margin-left: 5px;
`

const Navigation: React.FC = () => {
    const history = useHistory()
    const handleClientSideLogout = () => {
        logoutUser()
        history.push('/')
    }
    const handleLogout = async () => {
        try {
            await apiAuthentication
                .logoutUser()
                .then(() => {
                    handleClientSideLogout()
                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <SMainContainer>
            <SLink to={'/'}>Home</SLink>
            <SLink to={'/events'}>Events</SLink>
            <SLink to={'/events/all'}>All Events</SLink>
            <SLink to={'/login'}>Log in</SLink>
            <SLogOut onClick={handleLogout}>Log out</SLogOut>
        </SMainContainer>
    )
}

export default Navigation
