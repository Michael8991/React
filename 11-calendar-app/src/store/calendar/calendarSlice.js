import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

// const tempEvent = {
//     _idEvent: new Date().getTime(),
//     title: 'Birthday boss',
//     body: 'Have to buy a cake',
//     startDate: new Date(),
//     endDate: addHours(new Date(), 2),
//     bgColor: '#fafafa',
//     user: {
//         _id: 123,
//         name: 'Michael'
//     }
// };

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadingEvents: true,
        events: [],
        activeEvent: null,
    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload
        },
        onAddNewEvent: (state, { payload }) => {
            state.events.push(payload)
            state.activeEvent = null

        },
        onUpdateEvent: (state, { payload }) => {
            state.events = state.events.map(event => {
                if (event._idEvent === payload._idEvent) return payload;
                return event;
            })
        },
        onDeleteEvent: (state, { payload }) => {
            state.activeEvent = null;
            state.events = state.events.filter(events => events._id !== payload._id)
        },
        onLoadEvents: (state, { payload = [] }) => {
            state.isLoadingEvents = false
            // state.initialState.events = payload
            payload.forEach(event => {
                const exists = state.events.some(dbEvent => dbEvent._id === event._id)
                if (!exists) {
                    state.events.push(event)
                }
            });
        },
        onLogoutCalendar: (state) => {
            state.isLoadingEvents = true;
            state.events = [];
            state.activeEvent = null;
        }
    }
});

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar } = calendarSlice.actions;