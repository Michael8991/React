import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {



    return (
        <>
            <h4>Lista de tareas</h4>
            <hr />
            <ul className="list-group">
                {
                    todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onDeleteTodo={onDeleteTodo}
                            onToggleTodo={onToggleTodo}
                        />
                    ))
                }
            </ul>
        </>
    )
}
