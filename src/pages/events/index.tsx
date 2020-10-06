import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import AllEvents from './allEvent'
import NewEvent from './newEvent'
import { apiEvent } from '../../api/apiEvent'

// import { useDispatch, useSelector } from 'stores';
// import { TypedUseSelectorHook, useDispatch as reactUseDispatch, useSelector as reactUseSelector } from 'react-redux';

const Events = () => {
    // const dispatch = useDispatch();
    const [events, setEvents] = useState([])
    const [error, setError] = useState('')
    const { tab } = useParams()
    const getEventPage = () => {
        switch (tab) {
            case 'newEvent':
                return <NewEvent />
            case 'all':
                return <AllEvents events={events} />
            default:
                return <AllEvents events={events} />
        }
    }
    const fetchData = async () => {
        try {
            const response = await apiEvent.getAllEvents()
            setEvents(response.data)
        } catch (err) {
            setError(err)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return <>{events.length > 0 && getEventPage()}</>
}

export default Events
