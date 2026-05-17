import Board from "./Board";
import { useGame } from "../context/TicTacToeContext";

export default function Game() {

    const {
        squares,
        xIsNext,
        winner,
        play,
        jumpTo,
        moves,
        status,
        visible,
    } = useGame();

    return (
        <>
            <div className="game">

                <div className="game-board">

                    <div className="status">{ status }</div>

                    <Board squares={squares} onPlay={play} />

                </div>

                {visible && (
                    <div className="historyMoves">
                        
                        <h2>Historique des mouvements : </h2>

                        <div className="list">

                            <ol className="listHistoryMoves">

                                {moves
                                    .filter(({ move }) => move !== 0)
                                    .map(({ move, label }) => (

                                        <li key={move} className="elementMoves">

                                            <button className="buttonMoves" onClick={() => jumpTo(move)}> {label} </button>

                                        </li>
                                    ))}
                            </ol>

                        </div>

                        <button className="buttonMoves restartButton" onClick={() => jumpTo(0)}> Recommencer la partie </button>

                    </div>
                )}

            </div>
        </>
    );
}