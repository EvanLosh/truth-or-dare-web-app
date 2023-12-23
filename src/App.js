// App.js
// Copilot comments:
// Certainly! Below is an example of how you can set up routing between the components NewGame, GameBoard, HowToPlay, and Pools using React Router. Make sure you have React Router installed in your project (you can follow the installation instructions from the official documentation).
// In this example:
// The <Router> component wraps the entire app.
// The navigation links (<Link>) allow users to switch between different components.
// The <Switch> component ensures that only one route is rendered at a time.
// Each <Route> specifies a path and the corresponding component to render.
// Remember to create the actual NewGame, GameBoard, HowToPlay, and Pools components in separate files. Happy routing! 🚀🔗

// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NewGame from './components/NewGame';
import GameBoard from './components/GameBoard';
import HowToPlay from './components/HowToPlay';
import Pools from './components/Pools';

const App = () => {

  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/prompts') // Adjust the URL based on your JSON server setup
      .then((response) => response.json())
      .then((data) => setPrompts(data))
      .catch((error) => console.error('Error fetching prompts:', error));
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">My Game App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/new-game">New Game</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/game-board">Game Board</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/how-to-play">How to Play</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pools">Pools</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Define your routes and components */}
        <Switch>
          <Route path="/new-game" component={NewGame} />
          <Route path="/game-board" component={GameBoard} />
          <Route path="/how-to-play" component={HowToPlay} />
          <Route path="/pools" component={Pools} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
