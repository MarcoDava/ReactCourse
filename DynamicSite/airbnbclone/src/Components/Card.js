import React from 'react';

export default function Card(props) {
    return(
        <div className="card-container">
            <img src={props.image} alt="card image" className="card-image"/>
            <div className="card-description">
                <div className="rating">
                    <img src="images/Star.png" alt="star" className="star"/>
                    <p>{props.rating}<span className="gray">({props.reviewCount}) • {props.country}</span></p>
                </div>
                <p>
                    {props.description}
                </p>
                <p>
                    <span className="bolding">From ${props.cost}</span> / person
                </p>
            </div>
        </div>
    )
}