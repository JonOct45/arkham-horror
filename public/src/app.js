import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import arkhamcards from './arkhamcards.json';
import './app.css';


/*
Will need to set up the routers and the routes here.App

Also need to create the Navigation Bar and the Footer.

*/


export function App() {

  const cards = arkhamcards.filter( (card) => card.pack_name === 'Core Set' );

  const carddiv = cards.map( (card) => {
    return <div key = {card.name+card.imagesrc}>
     
      <img width = "auto" height = "250px" src = {"https://arkhamdb.com"+card.imagesrc}></img>
     
      </div>
      });

  
  return (
    <div>
      <h1>Hello, world, from the App!</h1>
      <div className = "cards">{carddiv}</div>
      {/* /* <div>{JSON.stringify(cards)}</div> */}
    </div>
  );
}

