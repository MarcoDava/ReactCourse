import Main from "./Components/Main.js"
import NavBar from "./Components/NavBar.js"

function App(){
    return(
        <div>
                <NavBar/>
                <Main/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
