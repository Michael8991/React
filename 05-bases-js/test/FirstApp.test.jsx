import React from "react";
import { render } from "@testing-library/react";
import { App } from "../src/FirstApp";


describe('Pruebas en <App/>', () => {
    test('Debe hacer match con el snapshot', () => {
        // const title = 'Hola, soy Michael'
        // const container = render(<App title={title} />)
        // expect(container).toMatchSnapshot();
    })

    test('Debe de mostrar el titulo en h1', () => {
        const title = 'Hola, soy Michael'
        const { container, getByText, getByTestId } = render(<App title={title} />)

        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title)
        expect(getByTestId('test-title').innerHTML).toContain(title)
    })
    test('Debe mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, soy Michael';
        const subtitle = 'Programando en React'
        const { getAllByText } = render(
            <App>
                title={title}
                subtitle={subtitle}
            </App>
        );
        expect(getAllByText(subtitle).length).toBe(1);
        // const { getByText } = render(
        //     <App>
        //         title={title}
        //         subtitle={subtitle}
        //     </App>
        // );
        // expect(getByText(subtitle)).toBeTruthy();
    })
});