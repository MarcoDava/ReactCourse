import React from 'react';

export default function Card() {
    return(
        <div className="card-container">
            <img src="images/card_image1.png" alt="card image" className="card-image"/>
            <div className="card-description">
                <div className="rating">
                    <img src="images/Star.png" alt="star" className="star"/>
                    <p>5.0<span className="gray">(6) • USA</span></p>
                </div>
                <p>
                    Life lessons with Katie
                </p>
                <p>
                    <span className="bolding">From $136</span> / person
                </p>
            </div>
        </div>
    )
}