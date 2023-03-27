import React from "react";
import arkhamcards from "./arkhamcards.json";
import { useState, useEffect } from "react";
import "./carddisplay.css";
import Button from "./button";
import Card from "./card";






export default function CardDisplay() {
    // const cards = arkhamcards.filter( (card) => card.type_name === 'Investigator' );
    
    const [investdisplay, setInvest] = useState([]);
    const [cardsdisplay, setCards] = useState([]);
    

    let filterPackSet = (name) => {
        console.log("In Filter Pack Set");
       
        const pack = arkhamcards.filter( (card) => card.pack_name === name && card.type_name !== 'Investigator' );
        const invest = arkhamcards.filter( (card) => card.pack_name === name && card.type_name === 'Investigator' );
       
        const carddiv = pack.map( (card) => {
      
            return <Card 
                    imagesrc = {card.imagesrc} 
                    key = {card.name+card.imagesrc}/>
          });
        
        const investdiv = invest.map( (card) => {
            return <Card
                    imagesrc = {card.imagesrc}
                    key = {card.name+card.imagesrc}/>
        });
        setInvest(investdiv);
        setCards(carddiv);
    }
    
   
    


    return (
        <div>
        
        <button
        value={'Core Set'}
        onClick={() =>filterPackSet('Core Set')}>
            Core</button>
        <button
        value = "The Path to Carcosa"
        onClick = {() => filterPackSet('The Path to Carcosa')}>The Path to Carcosa </button>

        <button 
        onClick = {() => filterPackSet('The Dunwich Legacy')}>The Dunwich Legacy</button>

        <button
        onClick = {() => filterPackSet('Before the Black Throne')}>Before the Black Throne</button>
        <button
        onClick = {() => filterPackSet('The Circle Undone')}>The Circle Undone</button>
        <div>
            <div className = "investigators"> {investdisplay}</div>
            <div className = "cards">{cardsdisplay}</div>
        </div>
        </div>
    );
}