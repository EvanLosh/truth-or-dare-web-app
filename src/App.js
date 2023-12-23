import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewGame from './NewGame'; // Import your NewGame component
import GameBoard from './GameBoard'; // Import your GameBoard component
import HowToPlay from './HowToPlay'; // Import your HowToPlay component
import Pools from './Pools'; // Import your Pools component
import axios from 'axios'; // Import Axios

const App = () => {

  const [truths, setTruths] = useState([{
    id: 1,
    body: "",
    likedByUser: false,
    dislikedByUser: false,
    likes: 0,
    dislikes: 0,
    skips: 0,
    rerolls: 0,
  }]);
  const [dares, setDares] = useState([{
    id: 1,
    body: "",
    likedByUser: false,
    dislikedByUser: false,
    likes: 0,
    dislikes: 0,
    skips: 0,
    rerolls: 0,
  }]);

  useEffect(() => {
    // Fetch truths
    axios.get('http://localhost:3000/truths')
      .then(response => setTruths(response.data))
      .catch(error => console.error('Error fetching truths:', error));

    // Fetch dares
    axios.get('http://localhost:3000/dares')
      .then(response => setDares(response.data))
      .catch(error => console.error('Error fetching dares:', error));
  }, []); // Empty dependency array to run only once on mount

  // State to hold the ruleset
  const [ruleset, setRuleset] = useState({
    players: [],
    skip: true,
    reroll: true,
    rerolls: 3,
    bannedTags: ""
  });

  // Callback function to update the ruleset
  const updateRuleset = (updatedRuleset) => {
    setRuleset(updatedRuleset);
  };

  // Function to toggle likedByUser
  function toggleLikedByUser(itemId) {
    const item = truths.cancat(dares).find((obj) => obj.id === itemId);
    if (item) {
      item.likedByUser = !item.likedByUser;
      item.likes += item.likedByUser ? 1 : -1;
    }
  }

  // Function to toggle dislikedByUser
  function toggleDislikedByUser(itemId) {
    const item = truths.cancat(dares).find((obj) => obj.id === itemId);
    if (item) {
      item.dislikedByUser = !item.dislikedByUser;
      item.dislikes += item.dislikedByUser ? 1 : -1;
    }
  }

  // Function to increment skips
  function incrementSkips(itemId) {
    const item = truths.concat(dares).find((obj) => obj.id === itemId);
    if (item) {
      item.skips += 1;
    }
  }

  // Function to increment rerolls
  function incrementRerolls(itemId) {
    const item = truths.concat(dares).find((obj) => obj.id === itemId);
    if (item) {
      item.rerolls += 1;
    }
  }

  function addNewTruthOrDare(type, text) {
    // Create a new dare object
    const newTruthOrDare = {
      id: truths.concat(dares).length + 1, // Assign a unique ID (you can adjust this logic)
      text: text,
      likedByUser: false,
      dislikedByUser: false,
      likes: 0,
      dislikes: 0,
      skips: 0,
      rerolls: 0,
    };

    // Add the new dare to the array
    if (type === "truth") {
      truths.push(newTruthOrDare);
    }
    if (type === "dare") {
      dares.push(newTruthOrDare)
    }
  }

  // Function to filter objects based on tags
  function filterByTags(query) {
    const queryWords = query.toLowerCase().split(" ");
    setTruths(truths.filter((item) => {
      const itemTags = item.tags.toLowerCase().split(" ");
      return !queryWords.some((word) => itemTags.includes(word));
    }));
    setDares(dares.filter((item) => {
      const itemTags = item.tags.toLowerCase().split(" ");
      return !queryWords.some((word) => itemTags.includes(word));
    }));
  }

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
          <Route path="/new-game" component={<NewGame ruleset={ruleset} updateRuleset={updateRuleset} filterByTags={filterByTags} />} />
          <Route path="/game-board" component={<GameBoard truths={truths} dares={dares} ruleset={ruleset} toggleDislikedByUser={toggleDislikedByUser} toggleLikedByUser={toggleLikedByUser} incrementRerolls={incrementRerolls} incrementSkips={incrementSkips} />} />
          <Route path="/how-to-play" component={<HowToPlay />} />
          <Route path="/pools" component={<Pools truths={truths} dares={dares} toggleDislikedByUser={toggleDislikedByUser} toggleLikedByUser={toggleLikedByUser} />} />
          {/* Add more routes as needed */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
