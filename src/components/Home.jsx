
import { Outlet, Link } from "react-router-dom";
import "./Home.css";
function Home(){
    return(
        <>
        <div className="body">
            <div className="container">
                <h1>Welcome To <br></br>DragImageGallery</h1>
                <div className="image-container">
                    <img src="/sky.jpeg" width={150} height={150}></img>
                    <img src="/nature2.jpeg" width={150} height={150}></img>
                    <img src="/sky2.jpeg" width={150} height={150}></img>
                    <img src="/nature1.jpeg" width={150} height={150}></img>
                    <img src="/food1.jpeg" width={150} height={150}></img>
                    <img src="/food2.jpeg" width={150} height={150}></img>
                </div>
                <Link to="/loginPage">
                    <button style={{width:"200px",backgroundColor:"black",marginTop:"30px"}}>Log In To Continue</button>
                </Link>
            
            </div>
            <Outlet/>
        </div>
        </>
    )
};
export default Home;