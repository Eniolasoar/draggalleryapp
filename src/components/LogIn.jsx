import "./Login.css";
function Login(){
    return(
        <div className="formContainer">
            <h1>DragImageGallery</h1>
            <div className="inner-container">
                <h2>Sign in to start your session</h2>
                <div className="input-container">
                    <input type="email" id="email" placeholder="UserName"/>
                    <div className="input-append-container">
                        <div className="input-append">
                            <i class="material-icons">email</i>
                        </div>
                    </div>
                    
                    
                </div>

                <div className="input-container">
                    <input type="password" id="email" placeholder="Password"/>
                    <div className="input-append-container">
                        <div className="input-append">
                            <i class="material-icons">lock</i>
                        </div>
                    </div>
                    
                   
                </div>

                <button>Log In</button>
                
            </div>
        </div>
    )
};
export default Login;