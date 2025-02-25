import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth"
import { PublicRoute } from "../../src/router/PublicRoute"
import { PrivateRoute } from "../../src/router/PrivateRoute"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Prueba en el privateRoute', () => {
    test('debe mostrar el children si este esta autenticado', () => {
        Storage.prototype.setItem = jest.fn();
        const contextValue = {
            logged: true,
            user: {
                id: '1234',
                username: 'Michael'
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="/login" element={
                            <PublicRoute>
                                <h1>Public route</h1>
                            </PublicRoute>
                        } />
                        <Route path="/marvel" element={<PrivateRoute><h1>Private route</h1></PrivateRoute>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        screen.debug();
        expect(screen.getByText('Private route')).toBeTruthy()
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel")
    })
})