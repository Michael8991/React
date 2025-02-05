import React from "react";
import { render } from "@testing-library/react";
import { CounterApp } from "../src/counterApp";

describe('Pruebas en <App/>', () => {

    test('Debe hacr match con el snapshot', () => {
        const container = render(<CounterApp value={0} />)
        expect(container).toMatchSnapshot();
    })
    test('Debe mostrar el valor inicial de 0', () => {
        const value = "0";
        const { container } = render(<CounterApp value={value} />);
        const pElement = container.querySelector('.totalCounter');
        expect(pElement.innerHTML).toContain(value)
    })

});