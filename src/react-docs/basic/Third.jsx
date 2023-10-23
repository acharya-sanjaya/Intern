// Display data in jsx

import React from 'react'

function Third() {
    const user = "Learner";

    return (
        <div style={{ marginLeft: "260px" }}>
            <h5><b>Task 3: Display data in JSX</b></h5>
            <h1>Hello, {user}</h1>

            <ul>
                <li>In jsx, we use <b>curly braces {"{ }"}</b> anywere to display variables or result of an expression</li>
                <li>Try doing:
                    <b>
                        <br />{"<p>Name = {username}<p>"}
                        <br />{"<p>Age = {myAge}<p>"}
                        <br />{"<p>result = {5 * x - y}</p>"}
                        <br />{"<img src={image.source} alt={image.name} />"}
                    </b>
                </li>
            </ul>
        </div>
    )
}

export default Third;