import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/10-useContext/HomePage"
import { UserContext } from "../../src/10-useContext/context/UserContext"


describe('Prueba <HomePage/>', () => {

    const user = {
        id: 1,
        name: 'Michael',
    }

    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />)
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre') //aria-label
        expect(preTag.innerHTML).toBe('null')
        // screen.debug()
    })
    test('Debe de mostrar algun dato del usuario', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />)
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('h1')
        expect(preTag.innerHTML).toContain(user.name)
        // screen.debug()
    })
})