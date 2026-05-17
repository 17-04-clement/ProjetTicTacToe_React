import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import GamePage from "../pages/GamePage";
import StatsPage from "../pages/StatsPage";
import AboutGame from "../pages/AboutGame";

export default function AppRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/game" element={<GamePage />} />
                <Route path="/stats" element={<StatsPage />} />
                <Route path="/about" element={<AboutGame />} />
            </Routes>
        </BrowserRouter>
    )
}