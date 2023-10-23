import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";

// Docs components
import First from "./react-docs/basic/First";
import Second from "./react-docs/basic/Second";
import Third from "./react-docs/basic/Third";
import Fourth from "./react-docs/basic/Fourth";
import Fifth from "./react-docs/basic/Fifth";
import Sixth from "./react-docs/basic/Sixth";
import TicTacToe from "./react-docs/tic-tac-toe/TicTacToe";

function App() {

    return (
        <BrowserRouter>
            <ul style={{ border: "5px solid blue", width: "250px", height: "100vh", float: "left" }}>
                <li><Link to="/">Homepage</Link></li>
                <br />
                <li><b style={{ fontSize: "20px" }}>Basic Tasks</b></li>
                <li><Link to="/first">First Task</Link></li>
                <li><Link to="/second">Second Task</Link></li>
                <li><Link to="/third">Third Task</Link></li>
                <li><Link to="/fourth">Fourth Task</Link></li>
                <li><Link to="/fifth">Fifth Task</Link></li>
                <li><Link to="/sixth">Sixth Task</Link></li>
                <br />
                <li><Link to="/tic-tac-toe">TicTacToe</Link></li>
            </ul >

            <Routes>
                <Route path="/" element={<div>This is homepage</div>} />
                <Route path="/first" element={<First />} />
                <Route path="/second" element={<Second />} />
                <Route path="/third" element={<Third />} />
                <Route path="/fourth" element={<Fourth />} />
                <Route path="/fifth" element={<Fifth />} />
                <Route path="/sixth" element={<Sixth />} />
                <Route path="/tic-tac-toe" element={<TicTacToe />} />
                <Route path="*" element={<div>Page not found</div>} />
            </Routes>
        </BrowserRouter >
    );
}

export default App;
