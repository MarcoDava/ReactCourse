import React from "react"

function Header(){
    return(
        <header>
            <nav className="nav-bar">
                <img src="react-logo.png" className="react-logo"></img>
                <ul className = "nav-bar-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
