import React, { useState } from 'react';
import "./Game.css";

const Square = ({ value, onClick }) => (
    <button className="square" onClick={onClick}>
        {value}
    </button>
);

const Board = ({ squares, onClick }) => (
    <div className="board">
        {squares.map((value, index) => (
            <Square key={index} value={value} onClick={() => onClick(index)} />
        ))}
    </div>
);

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const xIsNext = stepNumber % 2 === 0;
    const currentSquares = history[stepNumber];

    const handleClick = (index) => {
        const newHistory = history.slice(0, stepNumber + 1);
        const current = currentSquares.slice();

        if (calculateWinner(current) || current[index]) {
            return;
        }

        current[index] = xIsNext ? "X" : "O";
        setHistory(newHistory.concat([current]));
        setStepNumber(newHistory.length);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
    };

    const winner = calculateWinner(currentSquares);
    const status = winner
        ? `${winner} wins !`
        : (stepNumber === 9) ? "Draw !" : `${xIsNext ? "X's turn" : "O's turn"}`

    const moves = history.map((step, move) => {
        console.clear();
        console.log(history)
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>
                    {move ? `Go to move #${move}` : 'Restart Game'}
                </button>
            </li>
        )
    }
    );

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={currentSquares} onClick={handleClick} />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
};

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
};

export default Game;
