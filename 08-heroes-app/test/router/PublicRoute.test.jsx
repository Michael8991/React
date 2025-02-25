import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth/context/AuthContext'
import { PublicRoute } from '../../src/router/PublicRoute'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('Pruebas en rutas publicas', () => {
    const contextValue = { logged: false }
    test('Sino esta autenticado debe de mostrar el children', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Public route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Public route')).toBeTruthy()
    }),
        test('Debe de navegar si esta autenticado', () => {
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
                            <Route path='login' element={
                                <PublicRoute>
                                    <h1>Public route</h1>
                                </PublicRoute>
                            }></Route>
                            <Route path='marvel' element={<h1>Pagina marvel</h1>}></Route>
                        </Routes>
                    </MemoryRouter>
                </AuthContext.Provider>
            )
            expect(screen.getByText('Pagina marvel')).toBeTruthy();
        })
})