import { useTicTacToe } from "../hooks/useTicTacToe";
import { TicTacToeContext } from "./TicTacToeContext";

export function TicTacToeProvider({ children }) {
    const game = useTicTacToe();

    return (
        <TicTacToeContext.Provider value={game}>
            {children}
        </TicTacToeContext.Provider>
    );
}
