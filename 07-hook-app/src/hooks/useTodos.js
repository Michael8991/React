import { useEffect, useReducer } from "react";
import { todoReducer } from "../09-useReducer/TodoReducer.js"

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || [])
    }, [todos]);


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add TODO',
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] remove TODO',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] toggle TODO',
            payload: id
        })
    }


    const todosCounter = () => {
        return todos.length;
    }


    return {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todosCounter,
        pendingTodosCounter: todos.filter(todo => !todo.done).length

    }
}
