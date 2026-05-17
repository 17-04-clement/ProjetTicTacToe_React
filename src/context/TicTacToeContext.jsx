import { createContext, useContext } from "react";
import useTicTacToe from "../hooks/useTicTacToe";

const TicTacToeContext = createContext();

export function TicTacToeProvider({ children }) {
    const game = useTicTacToe();

    return (
        <TicTacToeContext.Provider value={game}>
            {children}
        </TicTacToeContext.Provider>
    );
}

export function useGame() {
    return useContext(TicTacToeContext);
}