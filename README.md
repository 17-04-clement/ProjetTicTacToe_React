# 🎮 Tic Tac Toe - React (Learning Project)

Ce projet est un jeu de morpion (Tic Tac Toe) réalisé avec React (suivis du tutoriel + de ma continuité à ajouter des choses) dans le but d'apprendre à :

- développer le jeu de Tic Tac Toe
- garder l'historique des coups (time travel)
- détecter automatiquement le gagnant ou match nul
- faire une architecture multi-pages avec React Router
- comprendre de faire un state partagé avec Context API
- comprendre et faire ses hooks React personnalisés
- faire une séparation logique / UI

## 📁 Structure du projet

```
TicTacToe/
│
├── public/
│   ├── background_page_1.jpg
│   ├── background_page_2.jpg
│   ├── tic-tac-toe.svg
│   └── tic-tac-toe.svg
│ 
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Game.jsx
│   │   ├── Board.jsx
│   │   └── Square.jsx
│   │
│   ├── context/
│   │   └── TicTacToeContext.jsx
│   │
│   ├── hooks/
│   │   └── useTicTacToe.js
│   │   
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── GamePage.jsx
│   │   ├── AboutPage.jsx
│   │   └── StatsPage.jsx
│   │
│   ├── routes/
│   │   └── AppRouter.jsx
│   │
│   ├── styles/
│   │   └── main.css
│   │
│   ├── utils/
│   │  └── calculateWinner.js
│   │  
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## 🧠 Les éléments React importants apprise par ce projet :

### 🔄 1. React re-render

Quand un state change :

- React relance le composant
- les variables sont recalculées
- l’UI est mise à jour automatiquement

On ne modifie jamais le DOM directement en React.

### 🧩 2. Components

#### 🟢 App.jsx
```js
export default function App() {
  return (
    <TicTacToeProvider>
      <Header />
      <AppRouter />
      <Footer />
    </TicTacToeProvider>
  );
}
```

C'est le point d’entrée de l’application React

#### 🎮 Game.jsx

Rôle :
- affiche le statut du jeu
- affiche le plateau et l’historique quand la partie est terminé

#### 🧱 Board.jsx

Rôle :
- affiche les 9 cases
- gère les clics utilisateur

#### 🔲 Square.jsx

Un simple bouton :
- affiche X, O ou vide
- déclenche un clic

#### 📜 Header.jsx

- Le component Header du site

#### 📜 Footer.jsx

- Le component Footer du site

### 📄 3. Pages :

Les pages représentent des écrans liés aux routes : 
- `HomePage`
- `GamePage`
- `StatsPage`

Responsabilités :
- organiser l’écran
- gérer la navigation
- assembler les composants

### 🧠 4. Hooks :

#### - useState :

```js
const [state, setState] = useState(initialValue);
```

- Le state est stocké par React
- `setState()` déclenche un re-render
- La valeur initiale n'est utilisée qu'au premier render

Le projet contient ce hook personnalisé :

`useTicTacToe.js`

Ce hook contient la logique du jeu :

States :
- countXWins
- countOWins
- countDraws
- gamePlayed
- visible
- history
- currentMove

Valeurs de retour : 
- squares,
- xIsNext,
- winner,
- moves,
- visible,
- status,
- gamePlayed,
- countXWins,
- countOWins,
- countDraws,
- play (fonction),
- jumpTo (fonction),

#### - useEffect :
```js 
useEffect(() => { 
  // code exécuté après le render 
}, [dependencies]);
```

Permet de réagir à un changement de state.

Exemple :

- afficher l’historique à la fin d’une partie

💡 Règle importante : useEffect = 'réaction à un changement'.
useEffect sert à gérer des effets secondaires, pas à calculer des valeurs.


### 🧭 5. React Router

Le projet utilise React Router pour gérer plusieurs pages sans rechargement du navigateur.

Concepts appris :
- `<BrowserRouter>`
- `<Routes>`
- `<Route>`
- navigation côté client
- séparation entre routing et composants UI

Exemple dans `AppRouter.jsx` :

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/game" element={<GamePage />} />
    <Route path="/stats" element={<StatsPage />} />
  </Routes>
</BrowserRouter>
```

### 🌐 6. États partagé avec Context API

Le projet utilise un Context React pour partager certaines données entre plusieurs pages (ex : statistiques).

`GamePage` et `StatsPage` ont besoin d’accéder à certaines données communes.

Le Context permet :
- d’éviter le "props drilling"
- de partager un state global
- de centraliser certaines données de l’application

### 🧩 7. Valeurs dérivées des hooks 

Certaines valeurs ne sont PAS dans le state mais sont lié :

```js
const squares = history[currentMove];
const winner = calculateWinner(squares);
const xIsNext = currentMove % 2 === 0;
```

Elles sont recalculées à chaque render

💡 Règle importante : 
Si une valeur peut être calculée, elle ne doit pas être dans le state.

### 🕒 8. Historique (time travel)

Dans le projet, ce jeu stocke toutes les versions du plateau :
```js
history = [
  plateau0,
  plateau1,
  plateau2,
  ...
]
```

- currentMove indique quelle version afficher
- permet de revenir dans le passé
- L'utilisateur clique le bouton d'un coup #...
- Le hook met à jour `currentMove` et donc le tableau `history`
- React re-render
- L’UI affiche le nouveau plateau que




### 🧠 Fonctions utilitaire

`calculateWinner.js`

Fonction utilitaire pure qui :

- vérifie toutes les combinaisons gagnantes
- retourne "X", "O" ou null

## 🧩 Conclusion

Ce projet m’a permis de comprendre :

- le cycle de render React
- la différence entre state et valeurs dérivées
- la logique des hooks
- la séparation logique / UI
- les états (`useState`)
- les effets (`useEffect`)
- la gestion d’un état temporel (time travel)
- la différence entre pages et composants
- la navigation avec React Router
- le partage d’état avec Context API
- l’organisation d’une architecture React plus scalable