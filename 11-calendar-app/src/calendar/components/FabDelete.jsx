import { useSelector } from "react-redux"
import { useCalendarStore, useUiStore } from "../../hooks"

export const FabDelete = () => {

    const { activeEvent } = useSelector(state => state.calendar)

    const { startDeletingEvent } = useCalendarStore()

    const handleClickDelete = () => {
        // console.log(activeEvent)
        startDeletingEvent(activeEvent)
    }

    return (
        <button
            disabled={!activeEvent}
            className="btn btn-danger fab-danger"
            onClick={handleClickDelete}
        >
            <i className="fas fa-trash-alt"></i>
        </button>
    )
}
