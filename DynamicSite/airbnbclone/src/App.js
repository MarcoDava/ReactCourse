import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import CardData from "./CardData";


export default function App(){
    const cardElements = CardData.map(card => {
        return <Card
            image={card.image}
            rating={card.rating}
            reviewCount={card.reviewCount}
            country={card.country}
            description={card.description}
            cost={card.cost}
            openSpots={card.openSpots}
        />
    })
    return(
        <div className="main-container">    
            <Navbar/>
            <div className="card-containers">
                {cardElements}
            </div>
        </div>
    )
}