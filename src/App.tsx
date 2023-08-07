import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileTopAppBar from './components/ProfileNavBar';

function App() {
  return (
    <div className="App">
      <ProfileTopAppBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn react
        </a>
      </header>
    </div>
  );
}

export default App;
