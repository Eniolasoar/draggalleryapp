import "./MainContent.css";
function MainContent(){
    return(
        <div className="main-content">
            <h1 className="galleryHeading">Welcome to Your Gallery</h1>
            <div className="inputContainer">
                <input type="text" placeholder="Search by tags" className="tagInput"/>
                <button>Search</button>
            </div>
            <div className="imageContainer">
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
                <img src="/home2.jpeg" alt="" width={300} height={300}/>
            </div>
        </div>

    )
}
export default MainContent;