import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getUser } from '../../functions'

const STitle = styled.div`
    color: ${(props) => props.theme.text};
`

const Home: React.FC = () => {
    const defaultUser = { email: '', firstName: '', lastName: '', id: 0 }
    const [user, setUser] = useState(defaultUser)

    useEffect(() => {
        const currentUser = getUser()
        if (currentUser === null) {
            setUser(defaultUser)
        } else {
            setUser(getUser())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setUser])
    return <>{user === defaultUser ? <>default</> : <>{user.firstName}</>}</>
}

export default Home
