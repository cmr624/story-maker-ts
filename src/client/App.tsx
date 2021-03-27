import React from 'react';
import logo from '../logo.svg';
import './App.css';
import GameViewController from './components/GameViewController';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Story Maker
        </p>
        <GameViewController/>
      </header>
    </div>
  );
}

export default App;
