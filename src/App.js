import './Weather.css';
import React from 'react';
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <form id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            class="search-input"
            id="search-input"
          />
          <input type="submit" value="Search" class="search-button" />
        </form>
      </header>
    </div>
  );
}

export default App;
