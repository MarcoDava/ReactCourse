import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

function ExampleWebsiteMain(){
    return(
        <div className="main-container">
            <Header/>
            <MainContent/>
            <Footer />
        </div>
    )
}

ReactDOM.render(<ExampleWebsiteMain />, document.getElementById('root'))


