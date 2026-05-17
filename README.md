# 🎮 Tic Tac Toe - React (Learning Project)

Ce projet est un jeu de morpion (Tic Tac Toe) réalisé avec React (suivis du tutoriel + de ma continuité) dans le but d'apprendre :

- les composants React
- le state et les re-renders
- les hooks (`useState`, `useEffect`)
- la gestion des événements
- la séparation logique / UI
- les valeurs dérivées
- la notion de "time travel" (historique)

&nbsp;
# 🧠 Concepts React importants appris

## 🔄 1. React re-render (important pour comprendre les bugs) 

Quand un state change :

- React relance le composant entier
- toutes les variables sont recalculées
- l’UI est mise à jour automatiquement

On ne modifie jamais le DOM directement en React.

## 🧠 2. useState (state React)

```js
const [state, setState] = useState(initialValue);
```

- Le state est stocké par React (pas dans la fonction)
- La valeur initiale n'est utilisée qu'au premier render
- setState déclenche un re-render

## 🧠 3. useEffect (nouvelle compréhension ajoutée) 
```js 
useEffect(() => { 
  // code exécuté après le render 
}, [dependencies]);
```

👉 Sert à réagir à un changement de state, pas à calculer une valeur.

Exemple dans le projet : afficher l’historique quand la partie est terminée 

💡 Règle importante : 
useEffect = “réaction à un changement”, pas logique de rendu.

## 🧩 4. Valeurs dérivées

Certaines valeurs ne sont PAS dans le state :

```js
const squares = history[currentMove];
const winner = calculateWinner(squares);
const xIsNext = currentMove % 2 === 0;
```

Elles sont recalculées à chaque render

💡 Règle importante : 
Si une valeur peut être calculée, elle ne doit pas être dans le state.

## 🕒 5. Historique (time travel)

Le jeu stocke toutes les versions du plateau :
```js
history = [
  plateau0,
  plateau1,
  plateau2
]
```

- currentMove indique quelle version afficher
- permet de revenir dans le passé

## ⚡ 6. Flux d’un clic

1. L'utilisateur clique sur une case
2. `Board` appelle `onPlay(i)`
3. Le hook met à jour `history` et `currentMove`
4. React re-render
5. L’UI affiche le nouveau plateau

## 📁 Structure du projet

```
src/
│
├── components/
│   ├── Game.jsx
│   ├── Board.jsx
│   └── Square.jsx
│
├── hooks/
│   └── useTicTacToe.js
│
├── styles/
│   └── main.css
│
├── utils/
│   └── calculateWinner.js
│
├── App.jsx
├── main.jsx
└── styles/
```

# 🧩 Components

## 🟢 App.jsx
```js
export default function App() {
  return <Game />;
}
```

Point d’entrée de l’application React

## 🎮 Game.jsx

Rôle :
- récupère les données du hook
- affiche le statut du jeu
- affiche le plateau et l’historique

Responsabilités :
- aucune logique métier
- uniquement orchestration UI

## 🧱 Board.jsx

Rôle :
- affiche les 9 cases
- gère les clics utilisateur
- transmet les actions au hook

Important :
- ne contient aucun state
- ne décide pas des règles du jeu

## 🔲 Square.jsx

Un simple bouton :
- affiche X, O ou vide
- déclenche un clic

## 🧠 Hook principal

`useTicTacToe.js`

Contient la logique du jeu :

States :
- history
- currentMove

Valeurs dérivées : 
- squares
- winner
- xIsNext
- moves
- Fonctions :
- play(i) → joue un coup
- jumpTo(move) → revient dans l’historique

## 🧠 Fonctions utilitaire

`calculateWinner.js`

Fonction utilitaire pure qui :

- vérifie toutes les combinaisons gagnantes
- retourne "X", "O" ou null


## 🧩 Conclusion

Ce projet m’a permis de comprendre :

le cycle de render React
la différence state / dérivé
la logique de hooks
la séparation logique / UI
les effets (useEffect)
la gestion d’un état temporel (time travel)