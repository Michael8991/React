import { useState } from "react";

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const incrementCounter = (value = 1) => { setCounter((current) => current + value) }
    const decrementCounter = (value = 1) => {
        // if (current === 0) return;
        setCounter((current) => current - value);
    }
    const resetCounter = () => { setCounter(initialValue) }

    return {
        counter,
        incrementCounter,
        decrementCounter,
        resetCounter
    }
}
