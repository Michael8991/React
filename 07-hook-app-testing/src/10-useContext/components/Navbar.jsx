import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3" style={{ backgroundColor: "#dadada" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">UseContext</Link>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => `nav-link  ${isActive ? 'active' : ''}`}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="about"
                                    className={({ isActive }) => `nav-link  ${isActive ? 'active' : ''}`} >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="login"
                                    className={({ isActive }) => `nav-link  ${isActive ? 'active' : ''}`} >
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >

        </>
    )
}
