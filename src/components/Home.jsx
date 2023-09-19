import "./Home.css";
function Home(){
    return(
        <div className="container">
            <h1>Welcome To <br></br>DragImageGallery</h1>
            <div className="image-container">
                <img src="/home1.jpeg" width={150} height={150}></img>
                <img src="/home2.jpeg" width={150} height={150}></img>
                <img src="/home3.jpeg" width={150} height={150}></img>
                <img src="/home4.jpeg" width={150} height={150}></img>
                <img src="/home5.jpeg" width={150} height={150}></img>
                <img src="/home6.jpeg" width={150} height={150}></img>
            </div>
            <button>Log In To Continue</button>
        </div>
    )
};
export default Home;