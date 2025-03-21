import { Link, Navigate, Route, Routes } from "react-router-dom"
import { TextEncoder, TextDecoder } from "text-encoding"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { Navbar } from "./components/Navbar"
import { UserProvider } from "./context/UserProvider"


export const MainApp = () => {
    return (
        <UserProvider>
            <h1>MainApp</h1>
            <Navbar></Navbar>
            <hr />


            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                {/* <Route path="/*" element={<LoginPage />} /> */}
                <Route path="/*" element={<Navigate to="/" />} />

            </Routes>
        </UserProvider>
    )
}
