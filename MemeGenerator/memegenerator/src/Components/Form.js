
export default function Form(){
    return(
        <div className="form-container">
            <div className="user-input">
                <div className="textboxes">
                    <input type="text" placeholder="Top text"></input>
                    <input type="text" placeholder="Bottom text"></input>
                </div>
                <button className="submit-button">Get a new meme image</button>
            </div>
        </div>
    )
}