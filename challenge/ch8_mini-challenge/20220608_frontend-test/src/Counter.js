import React, { useState } from "react";

const Counter = () => {
    const [ counter, setCounter ] = useState(0)

    const incrementCounter = () => {
        setCounter((counter) => counter + 1)
    }

    const decrementCounter = () => {
        setCounter((counter) => counter -1)
    }

    return (
        <>
        <button data-testid="increment" onClick={incrementCounter}>Increment</button>
        <p data-testid="counter">{counter}</p>
        <button data-testid="decrement" onClick={decrementCounter}>decrement</button>
        </>
    )
}

export default Counter;
