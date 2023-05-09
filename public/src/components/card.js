import React from "react";
import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';


export default function Cards(props) {

    // return (
    //     <div className = "card" key = {props.key}>
    //         <img width = "auto" height = "250px" src = {"https://arkhamdb.com"+props.imagesrc}></img>
    //         </div>

            
    // )

 
    let imageName = "https://arkhamdb.com" + props.props.imagesrc;
    console.log(props.props.imagesrc);
    
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card  className="card" sx={{ maxWidth: 345, padding: .3}} key={props.props.name}>
            <CardMedia 
                atl = {props.props.name}
                component = "img"
                height = "auto"
                image = {imageName}
                
                />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Artist: {props.props.illustrator}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {props.props.text}
                </Typography>
            </CardContent>

            {/* <img width = "auto" height = "250px" src = {"https://arkhamdb.com"+props.imagesrc}></img>  */}
        </Card>
        </Grid>
    )
}

