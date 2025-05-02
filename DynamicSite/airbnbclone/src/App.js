import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

export default function App(){
    return(
        <div className="main-container">    
            <Navbar/>
            <Card/>
        </div>
    )
}