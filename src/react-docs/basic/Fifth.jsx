// Event Handling and State
import React, { useState } from 'react'

const IndependentCounter = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <div style={{ border: "5px solid black", width: "130px", padding: "10px" }}>
            <p>Count = {counter}</p>
            <button onClick={incrementCounter}>Increase</button>
        </div>
    )
}

const Fifth = () => {
    const handleClick = () => {
        alert("Button Clicked!");
    }

    return (
        <div style={{ marginLeft: "260px" }}>
            <h5><b>Task 5: Event Handling and State</b></h5>
            <button onClick={handleClick}>Click Me</button>

            <div style={{ display: "flex", marginTop: "20px", padding: "20px", width: "400px", justifyContent: "space-around", border: "5px solid grey" }}>
                <IndependentCounter />
                <IndependentCounter />
            </div>
        </div>
    )
}

export default Fifth;