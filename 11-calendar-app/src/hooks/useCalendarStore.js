import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector(state => state.calendar)

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent) => {
        //TOdo: llegar al backend
        if (calendarEvent._idEvent) {
            dispatch(onUpdateEvent({ ...calendarEvent }))
        } else {
            dispatch(onAddNewEvent({ ...calendarEvent, _idEvent: new Date().getTime() }))
        }
    }

    const startDeletingEvent = async (calendarEvent) => {
        //TODO: eliminar evento\
        if (!calendarEvent) return;
        dispatch(onDeleteEvent(calendarEvent))
    }

    return {
        //*Properties
        events,
        activeEvent,

        //*Methodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,

    }
}
