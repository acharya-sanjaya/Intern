// Add markup and styles in JSX

import React from 'react';

const AboutPage = () => {
    return (
        <div style={{ marginLeft: "260px" }}>
            <h5><b>Task 2: Add markup and styles in JSX</b></h5>
            <h1>About</h1>
            <p>Hello there.
                <br />How do yo do?
            </p>
            <img className="myImage" src="https://i.ibb.co/gtxsjCf/Untitled.jpg" alt="Image not found" />
            <br />
            <br />

            <ul>
                <li>JSX is stricter than html</li>
                <li>Closing tags were optional in html. Example: <b>{"<br>, <hr>, <img src='imgSrc'>"}</b></li>
                <li>But in JSX, we must close tags like <b>{"<br />, <hr />, <img src='imgSrc' />"}</b></li>
                <br />
                <li>Also, we can't directly return multiple JSX tags from a component.</li>
                <li>We must enclose them in a shared parent like <b>{"<div></div>"}</b> or an empty wrapper like <b>{"<></>"}</b></li>
                <li>Example:
                    <b><pre>{`const MyComponent = () => {
    return (
        <p>Element 1</p>
        <p>Element 2</p>
    )
}
`}</pre></b>
                </li>
                <li>This makes error as MyComoponent is returning two JSX tags.</li>
                <li>If we want to return two tags we must wrap it like:</li>
                <b><pre>{`const MyComponent = () => {
    return (
        <div className="wrapper">
            <p>Element 1</p>
            <p>Element 2</p>
        </div>
    )
}
`}</pre></b>

            </ul>
        </div>
    )
}

export default AboutPage;