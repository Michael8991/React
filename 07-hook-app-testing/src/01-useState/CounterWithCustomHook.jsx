import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const { counter, incrementCounter, decrementCounter, resetCounter } = useCounter();

    return (
        <>
            <h1>Counter with hook: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => incrementCounter(2)}>+1</button>
            <button className="btn btn-primary" onClick={resetCounter}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrementCounter()}>-1</button>
        </>
    )
}
