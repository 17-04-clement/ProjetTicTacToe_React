import Header from "./components/Header";
import Footer from "./components/Footer";

import AppRouter from "./routes/AppRouter";

import { TicTacToeProvider } from "./context/TicTacToeProvider";

export default function App() {
    return (
        <TicTacToeProvider>

            <Header />

            <AppRouter />

            <Footer />
            
        </TicTacToeProvider>
    );
}