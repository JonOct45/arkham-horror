import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import arkhamcards from './arkhamcards.json';
import './app.css';
import CardDisplay from './carddisplay.js';

import Button from '@mui/material/Button';

/*
Will need to set up the routers and the routes here.App

Also need to create the Navigation Bar and the Footer.

*/


export function App() {

  
  return (
    <div>
      <h1>Arkham Horror! uwu</h1>
      <Button variant="contained">Hello World</Button>
     <CardDisplay />

      {/* /* <div>{JSON.stringify(cards)}</div> */}
    </div>
  );
}

