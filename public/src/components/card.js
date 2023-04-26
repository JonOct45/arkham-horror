import React from "react";
import Card from '@mui/material/Card';


export default function Cards(props) {

    // return (
    //     <div className = "card" key = {props.key}>
    //         <img width = "auto" height = "250px" src = {"https://arkhamdb.com"+props.imagesrc}></img>
    //         </div>

            
    // )
    return (
        <div className="card"><Card sx={{ maxWidth: 345, padding: .3}}>
            <img width = "auto" height = "250px" src = {"https://arkhamdb.com"+props.imagesrc}></img>
        </Card></div>
        
    )
}

