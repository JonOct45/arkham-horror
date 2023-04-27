import React from "react";
import Container from '@mui/material/Container';
import { useState } from "react";


export default function CardSearch() {

    //Create a generic box with "No Search Results Currently" for the empty search state.
    const emptySearch = <Container><h1>No Search Results Currently</h1></Container>

    const [searchResults, setSearchResults] = useState(emptySearch);



    //Empty search state

    return (
        <Container>
            <Container>
                <h1>Card Search Buttons</h1>
            </Container>
            <Container>
                {searchResults}
            </Container>
        </Container>
    )
}

