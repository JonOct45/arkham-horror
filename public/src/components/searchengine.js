/*
Will serve as the search engine for the cards, functional components only.
Creating a searchengine object that will be used to filter the cards.



*/
import React from "react";
import arkhamcards from "../arkhamcards.json";
import Cards from "./card.js";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardDisplay from "./carddisplay";
import Grid from "@mui/material/Grid";

export function searchInvestigators(cards) {
    //Filter the cards by type_name === "Investigator"
    let investigators = cards.filter(card => card.type_name === "Investigator");
    //Map each investigator to a Card component and return the array of Card components
    investigators = investigators.map(investigator => {
        return <Card card={investigator} key={investigator.name + investigator.imagesrc} />
    });
    
}

/**
 * Returns a Grid containing all of the investigator cards, each as a grid item.
 * Filters cards out of the arkhamcards.json file by type_name === "Investigator"
 */
export function returnInvestigators() {
    console.log("In returnInvestigators");
    const invest = arkhamcards.filter( (card) => card.type_name === 'Investigator' );

    let investigatorFilter = invest.map(investigator => {
        // return <Cards imagesrc = {investigator.imagesrc} card={investigator} key={investigator.name + investigator.imagesrc} />
        //Pass investigator as a prop to the Cards component
        
        return <Cards props={investigator} />    
    }
    
    );

    console.log(investigatorFilter);
    return <Grid
                container  
                spacing={2}
                >
                {investigatorFilter}
            </Grid>;

}

export function searchByName(cards, name) {
    //Filter the cards by name
    let card = cards.filter(card => card.name === name);
    return card;
}

export function searchByPack(cards, pack) {
    //Filter the cards by pack
    let card = cards.filter(card => card.pack_name === pack);
    return card;
}

export function searchByType(cards, type) {
    //Filter the cards by type
    let card = cards.filter(card => card.type_name === type);
    return card;
}

export function searchByFaction(cards, faction) {
    //Filter the cards by faction
    let card = cards.filter(card => card.faction_name === faction);
    return card;
}

export function searchByIllustrator(cards, illustrator) {
    //Filter the cards by illustrator
    let card = cards.filter(card => card.illustrator === illustrator);
    return card;
}  


