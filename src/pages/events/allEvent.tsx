import React from 'react'
import styled from 'styled-components'
import { IEvent, IUser } from '../../types'
interface EventProps {
    events?: IEvent[]
}

interface ParticipantProps {
    participants: IUser[]
}
const SMainContainer = styled.div`
    margin: 20px;
`
const SWelcome = styled.div`
    font-size: 20px;
    color: ${(props) => props.theme.colors.text.tertiary};
`
const STitle = styled.div`
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.text.quaternary};
`
const SAllEventsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const SEventContainer = styled.div`
    border-radius: 20px;
    min-height: 100px;
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.border};
    box-shadow: 3px 3px 3px rgba(205, 205, 205, 0.4);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background: ${(props) => props.theme.colors.primary};
`

const SEventImage = styled.div`
    min-width: 130px;
    height: 100px;
    border-right: 1px solid ${(props) => props.theme.colors.border};
`
const SEventRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 10px;
`
const SEventTitle = styled.div`
    font-size: 15px;
    font-weight: 800;
    color: ${(props) => props.theme.colors.text.primary};
`
const SParticipantsContainer = styled.div`
    font-size: 11px;
`
const SParticipant = styled.span`
    margin-left: 2px;
`

const Participants: React.FC<ParticipantProps> = ({ participants }) => {
    const getParticipants = (length: number, pIndex: number, participant: IUser) => {
        // console.log('length', length)
        // console.log(pIndex)
        if (pIndex === length) {
            return (
                <SParticipant>
                    {`&`} {participant.username}
                </SParticipant>
            )
        } else {
            return <SParticipant>{participant.username}</SParticipant>
        }
    }

    return (
        <>
            {participants.map((participant, index) =>
                // <SParticipant>{participant.username}</SParticipant>
                getParticipants(participants.length, index + 1, participant),
            )}
        </>
    )
}

const AllEvents: React.FC<EventProps> = ({ events }) => {
    console.log(events)
    return (
        <SMainContainer>
            <SWelcome>Welcome back</SWelcome>
            <STitle>Your Events</STitle>
            <SAllEventsContainer>
                {events !== undefined && events.length > 0 && (
                    <>
                        {events.map((event, index) => (
                            <SEventContainer>
                                <SEventImage />
                                <SEventRightContainer>
                                    <SEventTitle>{event.title}</SEventTitle>
                                    <SParticipantsContainer>
                                        with
                                        {event?.participants !== undefined && (
                                            <Participants participants={event.participants} />
                                        )}
                                    </SParticipantsContainer>
                                </SEventRightContainer>
                            </SEventContainer>
                        ))}
                    </>
                )}
            </SAllEventsContainer>
        </SMainContainer>
    )
}

export default AllEvents
