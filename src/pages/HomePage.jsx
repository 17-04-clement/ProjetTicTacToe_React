import { Link } from "react-router-dom";

export default function HomePage() {

    return (
        <main>

            <div className="HomeMain">

                <h1> 🎮 Bienvenue dans le jeu Tic Tac Toe 🎮 </h1>

                <div className="linksToRoutesHomePage">

                    <Link className="linkToRouteGame" to="/game"> Jouer au TicTacToe ! </Link>
                
                    <Link className="linkToRouteStats" to="/stats"> Statistiques </Link>

                    <Link className="linkToRouteAbout" to="/about"> À propos du jeu... </Link>

                </div>

            </div>

        </main>
    )
}