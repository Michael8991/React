import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/10-useContext/MainApp"
// import { UserContext } from "../../src/10-useContext/context/UserContext"
import { MemoryRouter } from "react-router-dom"

describe('Prueba de <MainApp/>', () => {
    test('Comprobar que se imprime el contenido de MainPage correctamente', () => {
        render(
            <MemoryRouter >
                <MainApp />
            </MemoryRouter>
        )
        expect(screen.getByText('Home Page')).toBeTruthy()
    });
    test('Comprobar que se imprime el contenido de LoginPage correctamente', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        )
        // screen.debug()
        expect(screen.getByText('Hola desde el Login')).toBeTruthy()
    });
    test('Comprobar que se imprime el contenido de LoginPage correctamente', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        )
        // screen.debug()
        expect(screen.getByText('Hola desde el about')).toBeTruthy()
    });
})