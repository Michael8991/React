import { renderHook } from "@testing-library/react"
import { useCustomForm } from "../../src/hooks/useCustomForm"
import { act } from "react";

describe('Pruebas en el useForm', () => {
    const initialForm = {
        name: 'Fernando',
        email: 'michael@gmail.com'
    }
    test('Debe regresar los valores por defecto', () => {
        const { result } = renderHook(() => useCustomForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    });
    test('Debe de cambiar el nombre del formulario', () => {
        const newValue = 'Juan';
        const { result } = renderHook(() => useCustomForm(initialForm));
        const { onInputChange } = result.current
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } })
        })
        expect(result.current.name).toBe(newValue)
        expect(result.current.formState.name).toBe(newValue)
    });
    test('Debe de realizar el reset del formulario', () => {
        const newValue = 'Juan';
        const { result } = renderHook(() => useCustomForm(initialForm));
        const { onInputChange, onResetForm } = result.current
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } })
            onResetForm()
        })
        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)
    })
})