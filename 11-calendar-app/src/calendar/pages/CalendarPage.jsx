import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { NavBar } from "../components/NavBar"
import { localizer, getMessagesES } from '../../helpers'
import { CalendarEvent } from '../components/CalendarEvent'
import { useEffect, useState } from 'react'
import { CalendarModal } from '../components/CalendarModal'
import { useUiStore, useCalendarStore } from '../../hooks'
import { FabAddNew } from '../components/FabAddNew'
import { FabDelete } from '../components/FabDelete'


export const CalendarPage = () => {

    const { events, setActiveEvent, startLoadingEvents } = useCalendarStore()
    const { openDateModal } = useUiStore();

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        }
        return { style }
    }

    const onDoubleClick = () => {
        // console.log({ onDoubleClick: event })
        openDateModal();
    }
    const onSelect = (event) => {
        // console.log({ click: event })
        setActiveEvent(event)
    }
    const onViewChanged = (event) => {
        localStorage.setItem('lastView', event)
        setLastView(event)
    }

    useEffect(() => {
        startLoadingEvents()
    }, [])

    return (
        <>
            <NavBar />
            <Calendar
                culture='es'
                localizer={localizer}
                events={events}
                defaultView={lastView}
                startAccessor="startDate"
                endAccessor="endDate"
                style={{ height: 'calc(100vh - 80px)' }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />
            <CalendarModal />
            <FabDelete />
            <FabAddNew />
        </>
    )
}
