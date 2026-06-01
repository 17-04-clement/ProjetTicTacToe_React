import { Link } from "react-router-dom";

import { useGame } from "../context/useGame";

export default function StatsPage() {

    const { gamePlayed, countXWins, countOWins, countDraws } = useGame();

    return (
        <main>

            <div className="StatsMain">

                <h1>📊 Statistiques du jeu 🎮 : </h1>

                <div className="StatsSection">

                    <section className="StatsSection">

                        <h2>Nombre de parties jouées :</h2> 

                        <p className="textP"> Vous avez joué {gamePlayed} parties au total. </p>

                    </section>
                    
                    <section className="StatsSection">

                        <h2>Nombre de victoires :</h2> 

                        <p className="textP"> Le joueur X à gagné : {countXWins} </p>
                        <p className="textP"> Le joueur O à gagné : {countOWins} </p>
                        <p className="textP"> Il y a eu {countDraws} matchs nuls. </p>

                    </section>

                </div>

                <Link className="linkToRouteHome" to="/"> Retour à l'accueil </Link>

            </div>

        </main>
    );
}