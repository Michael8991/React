import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/10-useContext/LoginPage"
import { UserContext } from "../../src/10-useContext/context/UserContext"

describe('Pruebas <LoginPage/>', () => {

    test('Debe de comprobar que se genera sin datos del usuario', () => {
        render(
            <UserContext.Provider value={{ user, setUser }} >
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getAllByAltText('pre');
        expect(preTag.innerHTML).toContain('null');
    })

    test('Debemos probar que al presionar el btn se llama a la funcion xxx', () => {
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{ user, setUserMock }} >
                <LoginPage />
            </UserContext.Provider>
        )
        const btnSetUser = screen.getByLabelText('btnSetUser');
        fireEvent.click(btnSetUser);

        expect(setUserMock).toHaveBeenCalled()

        const preTag = screen.getAllByAltText('pre');
        expect(preTag.innerHTML).toContain(user.id.toString);
    })
})