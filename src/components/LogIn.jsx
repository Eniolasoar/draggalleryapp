import "./Login.css";
import { auth } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import NavBar from "./NavBar.jsx";
import { useNavigate } from 'react-router-dom';

//USER HAS ALREADY BEING ADDED IN THE DATABASE
// async function initializeUserRegistration(email, password) {
//   try {
//     // Create a new user account with the provided email and password
//     await auth.createUserWithEmailAndPassword(email, password);
//   } catch (error) {
//     // Handle registration error
//     console.error('Registration error:', error);
//   }
// }

//initializeUserRegistration('user@example.com', '1Password');

function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const [borderColor,setBorderColor]=useState("1px solid gainsboro");
    
    const borderStyle={
        borderRight: "0",
        borderRadius: "5px",
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
        outline: "none"
    };

    const navigate = useNavigate();
    const signIn=(e)=>{
        console.log("success");
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        
        .then((loginCredentials)=>{
           

            const user=loginCredentials.user.email;
            navigate('/navbar', { state: { username: user } });
        })
        .catch((error) => {
                    console.error("Authentication error:", error);
                    if (error.code === "auth/wrong-password") {
                      setError("wrongPassword");
                    } else if (error.code === "auth/user-not-found") {
                      setError("invalidUser");
                    } 
                    else if (error.code === "auth/invalid-login-credentials") {
                      setError("invalidcredentials");
                    } else {
                      setError("authError");
                      setBorderColor("2px solid red");
                    }
                  });
    }
  

    return(
        <>
            {error=="authError"?
            <div className="authError">
                Authentication Error!!Please try again
            </div>

             :null}
            <div className="formContainer">
                <h1>DragGalleryApp</h1>
                <form className="inner-container" onSubmit={signIn}>
                    <h2>Sign in to start your session</h2>
                    <div className="input-container">
                        <input className="input" type="email" id="email" placeholder="UserName" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderStyle,borderColor: error === "authError" ? "red" : borderColor}}/>
                        <div className="input-append-container" style={{borderColor}}>
                            <div className="input-append">
                                <i className="material-icons">email</i>
                            </div>
                        </div>
            
            
            
                    </div>
                    <span className="errorMessage">{error=="invalidUser"?"UserName doesn't exist!!!" : null}</span>
                    <div className="input-container">
                        <input className="input" type="password" id="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderStyle,borderColor: error === "authError" ? "red" : borderColor}}/>
                        <div className="input-append-container" style={{borderColor}}>
                            <div className="input-append">
                                <i className="material-icons">lock</i>
                            </div>
                        </div>
            
            
                    </div>
                    <span className="errorMessage">{error=="wrongPassword"?"Incorrect Password!!" : null}</span>
                    <button type="submit">Log In</button>
            
                </form>
            </div>
            
        </>
    )
};
export default Login;