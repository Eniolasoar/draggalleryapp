
import { Outlet, Link } from "react-router-dom";
import "./Home.css";
function Home(){
    return(
        <>
        <div className="body">
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
                <Link to="/loginPage">
                    <button>Log In To Continue</button>
                </Link>
            
            </div>
            <Outlet/>
        </div>
        </>
    )
};
export default Home;