import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChanged = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) return;

        // setNewCategory(categories => [inputValue, ...categories])
        setInputValue("");
        onNewCategory(inputValue.trim())
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text" placeholder="Buscar..." value={inputValue} onChange={onInputChanged}></input>
        </form>
    )
}
