import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import AllBeersPage from './components/pages/AllBeersPage';
import RandomBeerPage from './components/pages/RandomBeerPage';
import AddBeerPage from './components/pages/AddBeerPage';
import HomePage from '../src/components/pages/HomePage';
import BeerDetailsPage from './components/pages/BeerDetailsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
