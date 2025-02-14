import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/09-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('Prueba <TodoApp/>', () => {
    useTodos.mockReturnValue({
        todos: [
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: false },
            { id: 3, description: 'Todo #3', done: true },
            { id: 4, description: 'Todo #4', done: true },
        ],
        todosCounter: 4,
        pendingTodosCounter: 2,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
    })
    test('Debe de mostrar el compononente correctamente', () => {
        render(<TodoApp />);
        // screen.debug()
        expect(screen.getByText('Todo #1')).toBeTruthy()
        expect(screen.getByText('Todo #2')).toBeTruthy()
        expect(screen.getByText('Todo #3')).toBeTruthy()
        expect(screen.getByText('Todo #4')).toBeTruthy()



    })
})