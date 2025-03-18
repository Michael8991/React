
export const CalendarEvent = ({ event }) => {

    const { title, user } = event;
    return (
        <>
            <p>{title}</p>
            <p>- {user.name}</p>
        </>
    )
}
