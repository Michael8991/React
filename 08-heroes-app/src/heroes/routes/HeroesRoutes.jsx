import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from "react-router-dom"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../../heroes"

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to="/marvel" />}></Route>
                    <Route path="marvel" element={<MarvelPage />}></Route>
                    <Route path="dc" element={<DcPage />}></Route>
                    <Route path="search" element={<SearchPage />}></Route>
                    <Route path="hero/:heroId" element={<HeroPage />}></Route>
                </Routes>
            </div>
        </>
    )
}
