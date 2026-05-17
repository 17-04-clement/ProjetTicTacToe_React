import { useEffect, useState } from "react";
import calculateWinner from "../utils/calculateWinner";

export default function useTicTacToe() {

    const [visible, setVisible] = useState(false);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);

    const squares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;
    const winner = calculateWinner(squares);
    const isDraw = squares.every(v => v !== null);

    let status = "";

    if (winner) {
        status = "Le joueur " + winner + " a gagné ! Félicitations !";
    } else if (isDraw) {
        status = "C'est un match nul ! Bravo aux deux joueurs !";
    } else {
        status = "C'est au joueur " + (xIsNext ? "X" : "O") + " de jouer :";
    }

    // Affiche l'historique quand la partie est terminée
    useEffect(() => {
        if (winner || isDraw) {
            setVisible(true);
        }
    }, [winner, isDraw]);

    function play(i) {

        if (squares[i] || winner || visible ) return;

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";

        const nextHistory = history.slice(0, currentMove + 1);

        nextHistory.push(nextSquares);

        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(move) {

        setCurrentMove(move);

        // Si on revient au début → on cache l'historique
        if (move === 0) {
            setVisible(false);
        }
    }

    const moves = history.map((_, move) => ({
        move,
        label:
            move === 0
                ? "Recommencer la partie"
                : `Aller au coup #${move}`,
    }));

    return {
        squares,
        xIsNext,
        winner,
        play,
        jumpTo,
        moves,
        visible,
        status,
    };
}