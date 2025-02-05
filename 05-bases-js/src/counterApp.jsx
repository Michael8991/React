import React from 'react';
import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const sumar = () => setCounter(counter + 1)
    const restar = () => setCounter(counter - 1)
    const reset = () => setCounter(value)


    return (
        <>
            <h1 className='titleCounterApp'>CounterApp</h1>
            <p className='totalCounter'>Total: {counter}</p>
            <h2 className='counterContainer'>
                <button className='counterButton' onClick={sumar} type='button'>
                    +1
                </button>
                <button className='counterButton' onClick={restar} type='button'>
                    -1
                </button>
                <button className='counterButton' onClick={reset} type='button'>
                    Reset
                </button>
            </h2>
        </>
    )
}

CounterApp.propTypes = {
    // value: PropTypes.number.isRequired
};

