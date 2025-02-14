import { todoReducer } from "../../src/09-useReducer/TodoReducer"

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }]

    test('Debe de regresar el estado incial', () => {
        const newState = todoReducer(initialState, {})
        expect(newState).toBe(initialState)
    });
    test('Debe de agregar un todo', () => {
        const action = {
            type: '[TODO] add TODO',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(2)
        expect(newState).toContain(action.payload)

    });
    test('Debe de remover un todo', () => {
        const action = {
            type: '[TODO] remove TODO',
            payload: 1
        };

        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(0)


    });
    test('Debe de agregar un todo', () => {
        const action = {
            type: '[TODO] toggle TODO',
            payload: 1
        };

        const newState = todoReducer(initialState, action)
        expect(newState[0].done).toBe(true)

    });
})