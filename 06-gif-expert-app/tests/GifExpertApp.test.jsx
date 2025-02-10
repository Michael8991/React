import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en <GifExpertApp/>', () => {
    test('', () => {
        render(<GifExpertApp />);

        // Intentar agregar una categoría que ya existe
        const input = screen.getByPlaceholderText("Buscar...");
        const form = screen.getByLabelText("form");

        fireEvent.change(input, { target: { value: 'One Punch' } });
        fireEvent.submit(form);

        // Verificar que el tamaño de categories sigue siendo 2
        expect(screen.getAllByRole('listitem')).toHaveLength(2);
    })
})