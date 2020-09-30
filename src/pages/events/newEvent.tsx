import React from 'react'
import styled from 'styled-components'

const SMainContainer = styled.div`
    background: ${(props) => props.theme.colors.background.secondary};
    min-height: 100vh;
    min-width: 100vw;
`
const SFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    background: ${(props) => props.theme.colors.background.tertiary};
    /* background: linear-gradient(
        25deg,
        rgba(255, 114, 98, 1) 0%,
        rgba(253, 129, 115, 1) 26%,
        rgba(247, 195, 188, 1) 100%
    ); */
    border-bottom-right-radius: 100px;
    border-bottom-left-radius: 100px;
    height: 90vh;
    width: 100%;
    padding: 20px;
`
const STabs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
const STitle = styled.div`
    color: ${(props) => props.theme.colors.text.secondary};
    font-size: 20px;
`

const SBackIcon = styled.div`
    border-left: 3px solid #fff;
    border-top: 3px solid #fff;
    transform: rotate(-45deg);
    width: 15px;
    height: 15px;
`
const SAdd = styled.div`
    color: ${(props) => props.theme.colors.text.secondary};
    font-weight: 800;
    letter-spacing: 1px;
`

const SForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

const NewEvent: React.FC = () => {
    return (
        <SMainContainer>
            <SFormContainer>
                <STabs>
                    <SBackIcon />
                    <SAdd>ADD</SAdd>
                </STabs>
                <SForm>
                    <STitle>New Event</STitle>
                </SForm>
            </SFormContainer>
        </SMainContainer>
    )
}

export default NewEvent
