import React from "react"
import memesData from "../MemesData"

export default function Form(){
    const [url,setUrl] = React.useState("")
    function getMeme(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log(randomNumber)
        setUrl(memesArray[randomNumber].url)
        console.log(url)
    }
    return(
        
        <div className="form-container">
            <div className="user-input">
                <div className="textboxes">
                    <input type="text" placeholder="Top text"></input>
                    <input type="text" placeholder="Bottom text"></input>
                </div>
                <button className="submit-button" onClick={getMeme}>Get a new meme image</button>
            </div>
            <img src={url} className="meme-image"/>
        </div>
    )
}