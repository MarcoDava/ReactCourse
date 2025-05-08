import memesData from "../MemesData"

export default function Form(){
    function getMeme(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * 10)+1
        const url= memesArray[randomNumber].image
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
        </div>
    )
}