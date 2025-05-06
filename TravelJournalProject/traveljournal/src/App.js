import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import CardData from "./CardData";
export default function App() {
     const cardElements = CardData.map(card => {
        return <Card
            image={card.image}
            country={card.country}
            link={card.link}
            location={card.location}
            startday={card.startday}
            startmonth={card.startmonth}
            startyear={card.startyear}
            endday={card.endday}
            endmonth={card.endmonth}
            endyear={card.endyear}
            description={card.description}
            
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