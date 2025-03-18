import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _idEvent: new Date().getTime(),
    title: 'Birthday boss',
    note: 'Have to buy a cake',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: 123,
        name: 'Michael'
    }
};

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [tempEvent],
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
            state.events = state.events.filter(events => events._idEvent !== payload._idEvent)
        }
    }
});

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;