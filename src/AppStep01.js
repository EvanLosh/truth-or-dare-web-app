import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewGame from './NewGame'; // Import your NewGame component
import GameBoard from './GameBoard'; // Import your GameBoard component
import HowToPlay from './HowToPlay'; // Import your HowToPlay component
import Pools from './Pools'; // Import your Pools component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/new-game" component={NewGame} />
        <Route path="/game-board" component={GameBoard} />
        <Route path="/how-to-play" component={HowToPlay} />
        <Route path="/pools" component={Pools} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
