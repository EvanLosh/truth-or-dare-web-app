import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewGame from './NewGame'; // Import your NewGame component
import GameBoard from './GameBoard'; // Import your GameBoard component
import HowToPlay from './HowToPlay'; // Import your HowToPlay component
import Pools from './Pools'; // Import your Pools component

const App = () => {
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Your Brand</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/new-game">New Game</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/game-board">Game Board</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/how-to-play">How to Play</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pools">Pools</a>
            </li>
          </ul>
        </div>
      </div>
      <Router>
        <Switch>
          <Route path="/new-game" component={NewGame} />
          <Route path="/game-board" component={GameBoard} />
          <Route path="/how-to-play" component={HowToPlay} />
          <Route path="/pools" component={Pools} />
          {/* Add more routes as needed */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
