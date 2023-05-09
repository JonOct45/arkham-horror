import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



/**
 * Nav bar component
 * Each Tab will have a drop down displaying filtered options for that tab.
 * Tabs will be "Home", "All Cards", "Investigators", "Pack Names", "Search"
 * 
 */

//

//Create buttons for navigation bar, "Home", "All Cards", "Investigators", "Pack Names", "Search"
//Each button will have a drop down menu with filtered options for that tab.
//Home will have no drop down menu.
//All cards will not have a drop down menu.
//Investigators will have a drop down menu with all investigators.
//Pack Names will have a drop down menu with all pack names.
//Search will have a drop down menu with a search bar.

//Home Button



export default function Navbar() {

    //Filter the cards by type_name === "Investigator"
    

    return (
        <Box>
            
            <h1>Navbar</h1>
            <Button variant="contained" href = {`/`}>Home</Button>
            <Button variant="contained" href ={`/investigators`}>Investigators</Button>
            <Button variant="contained" href = {`/carddisplay`}>Pack Names</Button>
            <Button variant="contained" href = {`/cardsearch`}>Search</Button>
            <div>  -------------------- </div>
    
        </Box>
    )
}