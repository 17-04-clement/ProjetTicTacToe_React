import { useContext } from "react";
import { TicTacToeContext } from "./TicTacToeContext";

export function useGame() {
    return useContext(TicTacToeContext);
}
