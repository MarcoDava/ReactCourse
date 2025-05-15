import React from "react"
import memesData from "../MemesData"

export default function Form(){
    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://cdn-useast1.kapwing.com/static/templates/shut-up-and-take-my-money-fry-meme-template-full-182f79b6.webp"
    })
    const [allMemeImages,setAllMemeImages]=React.useState(memesData) 

    function getMeme(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage:url
        }))
    }

    return(
        <div className="form-container">
            <div className="user-input">
                <div className="textboxes">
                    <input type="text" placeholder="Top text"/>
                    <input type="text" placeholder="Bottom text"/>
                </div>
                <button className="submit-button" onClick={getMeme}>Get a new meme image</button>
            </div>
            <img src={meme.randomImage} className="meme-image"/>
        </div>
    )
}