// Data Sharing between components

import { useState } from "react";

const CommonCounter = ({ buttonContent, count, changeHandler }) => {
    return (
        <div style={{ border: "5px solid black", width: "130px", padding: "10px" }}>
            <p>Count = {count}</p>
            <button onClick={changeHandler}>{buttonContent}</button>
        </div>
    )
}

function Sixth() {
    const [counter, setCounter] = useState(0);

    const handleCommonCounter = (update) => {
        setCounter(counter + update);
    }

    return (
        <div style={{ marginLeft: "260px" }}>
            <h5><b>Task 6: Data Sharing between components</b></h5>

            <div style={{ display: "flex", marginTop: "20px", padding: "20px", width: "400px", justifyContent: "space-around", border: "5px solid grey" }}>
                <CommonCounter buttonContent={"Increase"} count={counter} changeHandler={() => handleCommonCounter(1)} />
                <CommonCounter buttonContent={"Decrease"} count={counter} changeHandler={() => handleCommonCounter(-1)} />
            </div>
        </div>
    )
}

export default Sixth;