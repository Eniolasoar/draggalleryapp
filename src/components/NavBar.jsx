import { Outlet, Link } from "react-router-dom";
import "./NavBar.css";
import { useLocation } from 'react-router-dom';
import React from 'react';
function NavBar(){
//     const location = useLocation();
//     const username = location.state && location.state.username;
//     console.log("NavBar:",username);
//     let newUsername="";
//     for(let i=0;i<=username.length;i++){

// if(username[i]!="@"){
//     newUsername+=username[i];
// }
// else {
//     break; // Stop the loop when "@" is encountered
//   }
//     }
//     console.log(newUsername);
    
    return(
        <nav className="nav-container">
            <h1 className="heading">DragGallery<br></br>App</h1>
            <div className="nav-right">
                <p className="home">Home</p>
                
                {/* <Link to="/gallery/create">Create New Gallery  </Link> */}
                <div className="logo">
                    <img src="/b1.jpeg" alt="" width={50} className="image"/>
                    <p>Welcome</p>
                </div>
            </div>
            
            
        </nav>
    )
}
export default NavBar;