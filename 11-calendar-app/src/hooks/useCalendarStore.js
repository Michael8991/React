import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import Swal from "sweetalert2";


export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector(state => state.calendar)
    const { user } = useSelector(state => state.auth)

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent) => {

        try {
            if (calendarEvent._id) {
                await calendarApi.put(`/events/edit?id=${calendarEvent._id}`, calendarEvent)
                dispatch(onUpdateEvent({ ...calendarEvent, user }))
                return;
            }

            const { data } = await calendarApi.post('/events/new', calendarEvent, user)

            dispatch(onAddNewEvent({ ...calendarEvent, _id: data.uid, user }))

        } catch (error) {
            console.log(error)
            Swal.fire('Error al guardar', error.response.data?.msg, 'error')
        }

    }

    const startDeletingEvent = async (calendarEvent) => {
        try {
            if (!calendarEvent) return;
            await calendarApi.delete(`/events/delete?id=${calendarEvent._id}`)
            Swal.fire(`Nota borrada: ${calendarEvent.title}`, 'success')
            Swal.fire({
                title: `Nota borrada: ${calendarEvent.title}`,
                icon: "success",
                draggable: false
            });
            dispatch(onDeleteEvent(calendarEvent))
        } catch (error) {
            console.log(error)
            Swal.fire('Error al borrar el elemento', error.response.data?.msg, 'error')
        }

    }

    const startLoadingEvents = async () => {
        try {
            const { data } = await calendarApi.get('/events')
            const events = convertEventsToDateEvents(data.events)
            dispatch(onLoadEvents(events))
        } catch (error) {
            console.log('Error cargarndo eventos')
            // console.log(error)
        }
    }


    return {
        //*Properties
        events,
        activeEvent,

        //*Methodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents,

    }
}
