import { TodoList } from "./components/TodoList"
import { AddTodo } from "./components/AddTodo"
import { useTodos } from "../hooks/useTodos"


export const TodoApp = () => {

    const { todos, todosCounter, pendingTodosCounter, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos([])

    return (
        <>
            <h1>TodoApp: {todosCounter}, <small>pendientes: {pendingTodosCounter}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <AddTodo
                        onNewTodo={(value) => handleNewTodo(value)}
                    />
                </div>
            </div>
        </>
    )
}
