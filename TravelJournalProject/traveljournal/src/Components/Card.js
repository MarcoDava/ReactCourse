export default function Card(props){
    return(
        <div className="card-container">
            <img src={props.image} className="card-image" alt="travel destination"/>
            <div className = "card-description">
                <div className = "location-container">
                    <div className="country-container">
                        <img src="images/location_icon.png" className="location-icon" alt="location icon"/>
                        <h3>{props.country}</h3>
                        <a href={props.link}>View on Google Maps</a>
                    </div>
                    <h1>{props.location}</h1>
                </div>
                <div className="location-description">
                    <p><span className="bold">{props.startday} {props.startmonth}, {props.startyear} - {props.endday} {props.endmonth}, {props.endyear}</span></p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )   
}