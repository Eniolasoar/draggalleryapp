import "./Login.css";
import { auth } from "../../firebaseConfig";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
    const [user,setUser]=useState("");

    // function handleLogin(email,password) {
      
      
    //     signInWithEmailAndPassword(auth, email, password)
    //       .then((loginCredentials) => {
    //         setUser(loginCredentials.user);
    //         console.log("success");
    //       })
    //       .catch((error) => {
    //         console.error("Authentication error:", error);
    //         if (error.code === "auth/wrong-password") {
    //           setError("wrongPassword");
    //         } else if (error.code === "auth/user-not-found") {
    //           setError("invalidUser");
    //         } else {
    //           setError("authError");
    //         }
    //       });
    //   }

    const signIn=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((loginCredentials)=>{
            console.log(loginCredentials)
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
                    }
                  });
    }
    

    return(
        <>
            <div className="authError">{error=="authError"? "Authentication Error!!Please try again":null}</div>
            <div className="formContainer">
                <h1>DragImageGallery</h1>
                <form className="inner-container" onSubmit={signIn}>
                    <h2>Sign in to start your session</h2>
                    <div className="input-container">
                        <input type="email" id="email" placeholder="UserName" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <div className="input-append-container">
                            <div className="input-append">
                                <i className="material-icons">email</i>
                            </div>
                        </div>
            
            
            
                    </div>
                    <span className="errorMessage">{error=="invalidUser"?"UserName doesn't exist!!!" : null}</span>
                    <div className="input-container">
                        <input type="password" id="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <div className="input-append-container">
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