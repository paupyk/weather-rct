import './Weather.css';
import React from 'react';
import "./Weather.css";
import axios from "axios";
import Footer from './Footer.js';
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Search />
        <Footer />
      </header>
    </div>
  );
}

export default App;
