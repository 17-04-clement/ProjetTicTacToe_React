import { Link } from "react-router-dom";
import Game from "../components/Game";

export default function GamePage() {
    
    return (
        <main>

            <div className="GameMain">

                <h1> 🎮 Partie en cours 🎮</h1>
                
                <Game />

                <Link className="linkToRouteHome" to="/"> Retour à l'accueil </Link>
            
            </div>

        </main>
    );
}