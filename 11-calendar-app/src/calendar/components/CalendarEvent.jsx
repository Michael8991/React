
export const CalendarEvent = ({ event }) => {

    const { title, userName = 'Desconocido' } = event;
    return (
        <>
            <p>{title}</p>
            <p>- {userName}</p>
        </>
    )
}
