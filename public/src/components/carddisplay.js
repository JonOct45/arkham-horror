import React from "react";
import arkhamcards from "../arkhamcards.json";
import { useState, useEffect } from "react";
import "../css/carddisplay.css";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Cards from "./card";
import Card from "./card";
import { searchByPack } from "./searchengine";






export default function CardDisplay() {
    // const cards = arkhamcards.filter( (card) => card.type_name === 'Investigator' );
    
    // Hook to set the state of the cards to be displayed
    const [investdisplay, setInvest] = useState([<>Hello</>]);
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
    
    let createButtons = () => {
        /*
        Creates a mapped list of every packname then creates buttons for each one.  */



        const packnames = arkhamcards.map( (card) => card.pack_name);
        //Sort the pack names alphabetically
        packnames.sort();
        const uniquepacknames = [...new Set(packnames)];
        console.log(uniquepacknames.length)
  

        const buttons = uniquepacknames.map( (name) => {
            return <Button variant = "contained" onClick={() => setCards(searchByPack(name))}>{name}</Button>
        });

      return buttons
    }

    //Function that removes the filter blur from the cards
    
    


    return (
        
        <div>
            
            <div className = "buttons">{createButtons()}</div>
            <div className = "investigators"> {investdisplay}</div>
            <div className = "cards">{cardsdisplay}</div>
        </div>
        
    );
}

