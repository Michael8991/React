import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter'
import { act } from 'react';

describe('Pruebas en useCounter Hook', () => {
    test('Debe de retornar los valor por defecto', () => {
        const { result } = renderHook(() => useCounter())
        const { counter, decrementCounter, incrementCounter, resetCounter } = result.current;
        expect(counter).toBe(10);
        expect(decrementCounter).toEqual(expect.any(Function));
        expect(incrementCounter).toEqual(expect.any(Function));
        expect(resetCounter).toEqual(expect.any(Function));
    })
    test('El valor inicial debe retornar el valor que se le pasa por parametro', () => {
        const inputValue = 100;
        const { result } = renderHook(() => useCounter(inputValue))
        const { counter } = result.current;
        expect(counter).toBe(100);
    })
    test('Debe devolver los valores correctos para las funciones increment,decrement,reset', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrementCounter, incrementCounter, resetCounter } = result.current;

        act(() => {
            incrementCounter(1);
        })
        expect(result.current.counter).toBe(101)

        act(() => {
            decrementCounter(11);
        })
        expect(result.current.counter).toBe(90)

        act(() => {
            resetCounter();
        })
        expect(result.current.counter).toBe(100)
    })
})