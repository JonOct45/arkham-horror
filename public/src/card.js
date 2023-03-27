import React from "react";


export default function Card(props) {

    return (
        <div className = "card" key = {props.key}>
            <img width = "auto" height = "250px" src = {"https://arkhamdb.com"+props.imagesrc}></img>
            </div>
    )
}

