import { React, useState, useEffect } from 'react'
import "./TicTacToe.css";


const Square = ({ squareContent, textColor, clickNotifier }) => {
    return (
        <button className="square" style={{ color: textColor }} onClick={clickNotifier}>{squareContent}</button>
    )
}

const TicTacToe = () => {
    const [moveNumber, setMoveNumber] = useState(0);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[moveNumber];

    useEffect(() => {
        console.log(history);
    }, [history])

    const getWinner = () => {
        let winner = null;
        const winningConditions = [
            // Rows
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            // Columns
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            // Diagonals
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winningConditions.length; i++) {
            let [a, b, c] = winningConditions[i];

            if (currentSquares[a] && (currentSquares[a] === currentSquares[b]) && (currentSquares[a] === currentSquares[c])) {
                winner = currentSquares[a];
                break;
            }
        }

        return winner;
    }

    const handleSquareClick = (index) => {
        const newHistory = history.slice(0, moveNumber + 1);
        const squares = currentSquares.slice();

        if (getWinner() || squares[index]) {
            return;
        }

        squares[index] = (moveNumber % 2 === 0) ? "X" : "O";

        setHistory(newHistory.concat([squares]));
        setMoveNumber(newHistory.length);
    }

    const handleTravel = (movePosition) => {
        setMoveNumber(movePosition);
        if (movePosition === 0) {
            setHistory([Array(9).fill(null)])
        }
    }

    const winner = getWinner();
    const gameStatus = winner ? `${winner} wins !` : (moveNumber === 9) ? "Draw !" : (moveNumber % 2 === 0) ? "X's turn" : "O's turn";

    return (
        <div className="game-container">
            <table className="board-container">
                <thead><tr><th colSpan={3}>{gameStatus}</th></tr></thead>
                <tbody>
                    <tr>
                        <td><Square clickNotifier={() => { handleSquareClick(0) }} squareContent={currentSquares[0]} textColor={currentSquares[0] === "X" ? "red" : "blue"} /></td>
                        <td><Square clickNotifier={() => { handleSquareClick(1) }} squareContent={currentSquares[1]} textColor={currentSquares[1] === "X" ? "red" : "blue"} /></td>
                        <td><Square clickNotifier={() => { handleSquareClick(2) }} squareContent={currentSquares[2]} textColor={currentSquares[2] === "X" ? "red" : "blue"} /></td>
                    </tr>
                    <tr>
                        <td><Square clickNotifier={() => { handleSquareClick(3) }} squareContent={currentSquares[3]} textColor={currentSquares[3] === "X" ? "red" : "blue"} /></td>
                        <td><Square clickNotifier={() => { handleSquareClick(4) }} squareContent={currentSquares[4]} textColor={currentSquares[4] === "X" ? "red" : "blue"} /></td>
                        <td><Square clickNotifier={() => { handleSquareClick(5) }} squareContent={currentSquares[5]} textColor={currentSquares[5] === "X" ? "red" : "blue"} /></td>
                    </tr>
                    <tr>
                        <td><Square clickNotifier={() => { handleSquareClick(6) }} squareContent={currentSquares[6]} textColor={currentSquares[6] === "X" ? "red" : "blue"} /></td>
                        <td><Square clickNotifier={() => { handleSquareClick(7) }} squareContent={currentSquares[7]} textColor={currentSquares[7] === "X" ? "red" : "blue"} /></td>
                        <td><Square clickNotifier={() => { handleSquareClick(8) }} squareContent={currentSquares[8]} textColor={currentSquares[8] === "X" ? "red" : "blue"} /></td>
                    </tr>
                </tbody>
            </table>

            <table className="history-table">
                <thead></thead>
                <tbody>
                    {
                        (moveNumber !== 0) ? (
                            <tr>
                                <td>
                                    <button onClick={() => { handleTravel(0) }}>Restart Game</button>
                                </td>
                            </tr>

                        ) : null
                    }
                    {
                        history.map(
                            (_, index) => (
                                index ? <tr key={index}><td><button onClick={() => { handleTravel(index) }}>Go to move {index}</button></td></tr> : null
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}


export default TicTacToe;
