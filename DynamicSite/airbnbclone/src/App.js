import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

export default function App(){
    return(
        <div className="main-container">    
            <Navbar/>
            <div className="card-containers">
                <Card
                    image="images/card_image1.png"
                    rating="5.0"
                    reviewCount="6"
                    country="USA"
                    description="Life lessons with Katie Zaferes"
                    cost="136"
                />
                <Card
                    image="images/card_image2.png"
                    rating="5.0"
                    reviewCount="30"
                    country="USA"
                    description="Learn wedding photography"
                    cost="125"
                />
                <Card
                    image="images/card_image3.png"
                    rating="4.8"
                    reviewCount="2"
                    country="USA"
                    description="Group Mountain Biking"
                    cost="50"
                />

            </div>
        </div>
    )
}