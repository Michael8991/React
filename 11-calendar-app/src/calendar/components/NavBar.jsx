import { useAuthStore } from "../../hooks"

export const NavBar = () => {

    const { startLogout, user } = useAuthStore();

    return (
        <div className="navbar navbar-dark bg-dark mb-4 px-4">
            <span className="navbar-band text-white">
                <i className="fas fa-calendar-alt me-2" />
                {user.name}'s calendar
            </span>
            <button onClick={startLogout} className="btn btn-outline-danger">
                <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>
                <span>Salir</span>
            </button>
        </div>
    )
}
