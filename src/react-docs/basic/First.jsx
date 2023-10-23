// Create and nest components

// Declaring a component
const Component1 = () => {
    return (
        <button>I'm a button</button>
    )
}

// Nesting that component into another component
const Component2 = () => {
    return (
        <div style={{ marginLeft: "260px" }}>
            <h5><b>Task 1: Create and nest components</b></h5>
            <h1>Hello, there!</h1>
            <Component1 />
            {/* Component1 is used inside Component2 (Component nested) */}
        </div>
    )
}

export default Component2;
// Here we exported the main component of the file
// Now we can import this component in any other file in the project
