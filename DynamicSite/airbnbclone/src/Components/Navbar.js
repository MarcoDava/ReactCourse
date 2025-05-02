import React from "react";

export default function Navbar(){
    return(
        <nav>
            <div className="navbar-logo">
                <img src="images/air_bnb_logo.png" alt="airbnb logo" />
            </div>
            <div className="online-experiences">
                <img src="images/online_experiences.png" alt="online experiences" className="card-image"/>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by<br/>one-of-a-kind hosts—all without leaving<br/>home.</p>
            </div>
        </nav>
    );
}