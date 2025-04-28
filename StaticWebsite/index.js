
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
