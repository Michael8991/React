
export const NavBar = () => {
    return (
        <div className="navbar navbar-dark bg-dark mb-4 px-4">
            <span className="navbar-band text-white">
                <i className="fas fa-calendar-alt me-2" />
                Michael's calendar
            </span>
            <button className="btn btn-outline-danger">
                <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>
                <span>Salir</span>
            </button>
        </div>
    )
}
