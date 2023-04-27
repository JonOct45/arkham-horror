import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import CardDisplay from './components/carddisplay.js';
import CardSearch from './components/cardsearch.js';
import Navbar from './components/navbar.js';
import Home from './components/home.js';


/*
Will need to set up the routers and the routes here.App

Also need to create the Navigation Bar and the Footer.

*/


export function App() {

  
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carddisplay" element={<CardDisplay />} />
          <Route path ="/cardsearch" element={<CardSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
