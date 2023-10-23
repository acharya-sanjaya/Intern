// Conditional rendering and lists

import React, { useState } from 'react'

const AdminPanel = ({ logoutHandler }) => {
    return (
        <div>
            <h3>You are at Admin Panel</h3>
            <button onClick={() => logoutHandler()}>Logout</button>
        </div>
    )
}

const LoginForm = ({ loginHandler }) => {
    return (
        <div>
            <h3>You are at Login Page</h3>
            <button onClick={() => loginHandler()}>Login</button>
        </div>
    )
}

const Fourth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => { setIsLoggedIn(true) }
    const logout = () => { setIsLoggedIn(false) }

    const products = [
        { title: "Cabbage", isFruit: false, id: 1 },
        { title: "Garlic", isFruit: false, id: 2 },
        { title: "Apple", isFruit: true, id: 3 },
    ];

    const listItems = products.map(
        product => (
            <li
                key={product.id}
                style={{
                    color: product.isFruit ? "red" : "green"
                }}
            >
                {product.title}
            </li>
        )
    );

    return (
        <div style={{ marginLeft: "260px" }}>
            <h5><b>Task 4: Conditional rendering and lists</b></h5>

            {isLoggedIn ? (<AdminPanel logoutHandler={logout} />) : (<LoginForm loginHandler={login} />)}

            <br />

            <ul>
                <h3>Product List</h3>
                {listItems}
            </ul>


        </div>
    )
}

export default Fourth;
