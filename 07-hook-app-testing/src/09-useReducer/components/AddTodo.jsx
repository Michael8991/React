import { useState } from "react"

export const AddTodo = ({ onNewTodo }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChanged = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() < 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: inputValue.trim(),
            done: false
        }

        onNewTodo(newTodo) //Pasamos el objeto a la funcion
        setInputValue(""); //Reseteamos el input
    }
    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={(event) => onSubmit(event)} aria-label="form">
                <input type="text" placeholder="Que hay que hacer?" className="form-control" value={inputValue} onChange={onInputChanged} />
                <button type="submit" className="btn btn-outline-success mt-2">Agregar</button>
            </form>
        </>
    )
}
