// App.js
// Copilot comments:
// Certainly! Below is an example of how you can set up routing between the components NewGame, GameBoard, HowToPlay, and Pools using React Router. Make sure you have React Router installed in your project (you can follow the installation instructions from the official documentation).
// In this example:
// The <Router> component wraps the entire app.
// The navigation links (<Link>) allow users to switch between different components.
// The <Switch> component ensures that only one route is rendered at a time.
// Each <Route> specifies a path and the corresponding component to render.
// Remember to create the actual NewGame, GameBoard, HowToPlay, and Pools components in separate files. Happy routing! 🚀🔗

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NewGame from './components/NewGame';
import GameBoard from './components/GameBoard';
import HowToPlay from './components/HowToPlay';
import Pools from './components/Pools';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">New Game</Link>
            </li>
            <li>
              <Link to="/game">Game Board</Link>
            </li>
            <li>
              <Link to="/how-to-play">How to Play</Link>
            </li>
            <li>
              <Link to="/pools">Pools</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={NewGame} />
          <Route path="/game" component={GameBoard} />
          <Route path="/how-to-play" component={HowToPlay} />
          <Route path="/pools" component={Pools} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
