import { Link } from "react-router-dom";

export default function AboutGame() {

    return (
        <>
            <main>

                <div className="AboutMain">

                    <h1>🕹️ À propos du jeu 🕹️</h1>

                    <section className="AboutSection">

                        <h2>Présentation du jeu :</h2>

                        <p className="textP">
                            Le Tic Tac Toe, également connu sous le nom de Morpion, est un jeu de stratégie simple qui se joue sur une grille de 3x3. Deux joueurs s'affrontent en plaçant alternativement leurs symboles (généralement X et O) dans les cases de la grille. Le but du jeu est d'aligner trois de ses symboles horizontalement, verticalement ou en diagonale avant que l'adversaire ne le fasse.
                        </p>

                        <p className="textP">
                            Le jeu est souvent utilisé pour enseigner les concepts de stratégie et de logique, car il nécessite une réflexion anticipée et la capacité de prévoir les mouvements de l'adversaire. Bien que le Tic Tac Toe puisse sembler simple, il offre une profondeur stratégique qui peut être appréciée par les joueurs de tous âges.
                        </p>

                        <p className="textP">
                            Dans ce projet, j'ai développé une version numérique du Tic Tac Toe en utilisant React. Les joueurs s'affrontent au tour par tour. Le jeu inclut des fonctionnalités telles que l'historique des mouvements et la détection automatique des gagnants ou des matchs nuls. J'espère que ce projet vous permettra de profiter de ce classique intemporel du jeu de société tout en découvrant les possibilités offertes par le développement web avec React.
                        </p>

                        <p className="textP">
                            Amusez-vous bien en jouant au Tic Tac Toe ! 🎉
                        </p>

                    </section>

                    <Link className="linkToRouteHome" to="/"> Retour à l'accueil </Link>

                </div>

            </main>
        </>
    );
}