import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useCounter, useFetch } from '../../src/hooks';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Pruebas en MultipleCustoms Hooks', () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        incrementCounter: mockIncrement
    })

    beforeEach(() => jest.clearAllMocks)
    test('Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null })

        render(<MultipleCustomHooks />)
        expect(screen.getByText('Cargando...'))

        const nextBtn = screen.getByRole('button', { name: 'Siguiente' });
        expect(nextBtn.disabled).toBe(true)

        const previousBtn = screen.getByRole('button', { name: 'Siguiente' });
        expect(previousBtn.disabled).toBe(true)

        // screen.debug()
    });
    test('Debe de mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data:
            {
                name: 'Pikachu',
                id: 25,
                sprites: {
                    front_default: 'https://pokeapi.co/api/v2/pokemon/25/front_default.png',
                    front_shiny: 'https://pokeapi.co/api/v2/pokemon/25/front_shiny.png',
                    back_default: 'https://pokeapi.co/api/v2/pokemon/25/back_default.png',
                    back_shiny: 'https://pokeapi.co/api/v2/pokemon/25/back_shiny.png'
                }
            },
            isLoading: false,
            hasError: null
        })
        render(<MultipleCustomHooks />)
        const nextBtn = screen.getByRole('button', { name: 'Siguiente' });
        expect(nextBtn.disabled).toBeFalsy()
    });
    test('Debe de llamar a la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data:
            {
                name: 'Pikachu',
                id: 25,
                sprites: {
                    front_default: 'https://pokeapi.co/api/v2/pokemon/25/front_default.png',
                    front_shiny: 'https://pokeapi.co/api/v2/pokemon/25/front_shiny.png',
                    back_default: 'https://pokeapi.co/api/v2/pokemon/25/back_default.png',
                    back_shiny: 'https://pokeapi.co/api/v2/pokemon/25/back_shiny.png'
                }
            },
            isLoading: false,
            hasError: null
        })
        render(<MultipleCustomHooks />)
        const nextBtn = screen.getByRole('button', { name: 'Siguiente' });
        fireEvent.click(nextBtn);


        expect(mockIncrement).toHaveBeenCalled()

    })
})