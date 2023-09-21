import "./MainContent.css";
import React, { useState } from 'react'; 
import NavBar from "./NavBar";
function MainContent(){
    const [heartColor, setBackgroundColor] = useState('#9CA3AF');

  const handleClick = () => {
    setBackgroundColor('red');
  };
    return(
        <>
            <NavBar/>
            <div className="main-content">
                <h1 className="galleryHeading">Welcome to Your Gallery</h1>
                <div className="inputContainer">
                    <input list="tags" placeholder="Search by tags" className="tagInput"/>
                    <datalist id="tags">
                        <option>Sports</option>
                        <option>Diving</option>
                        <option>Sports</option>
                        <option>Diving</option>
                        <option>Sports</option>
                        <option>Diving</option>
                    </datalist>
                    <button>Search</button>
                </div>
                <div className="imageContainer">
                    <div className="imageBox" style={{position:"relative"}}>
                        <img src="/home2.jpeg" alt="" width={300} height={300}/>
                        <img src="/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                        <div className="imageTag">
                            <p>Sport</p>
                            <p>Diving</p>
                        </div>
                    </div>
                    <div className="imageBox" style={{position:"relative"}}>
                        <img src="/home2.jpeg" alt="" width={300} height={300}/>
                        <img src="/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                        <div className="imageTag">
                            <p>Sport</p>
                            <p>Diving</p>
                        </div>
                    </div>
                    <div className="imageBox" style={{position:"relative"}}>
                        <img src="/home2.jpeg" alt="" width={300} height={300}/>
                        <img src="/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                        <div className="imageTag">
                            <p>Sport</p>
                            <p>Diving</p>
                        </div>
                    </div>
                    <div className="imageBox" style={{position:"relative"}}>
                        <img src="/home2.jpeg" alt="" width={300} height={300}/>
                        <img src="/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                        <div className="imageTag">
                            <p>Sport</p>
                            <p>Diving</p>
                        </div>
                    </div>
                    <div className="imageBox" style={{position:"relative"}}>
                        <img src="/home2.jpeg" alt="" width={300} height={300}/>
                        <img src="/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                        <div className="imageTag">
                            <p>Sport</p>
                            <p>Diving</p>
                        </div>
                    </div>
                    <div className="imageBox" style={{position:"relative"}}>
                        <img src="/home2.jpeg" alt="" width={300} height={300}/>
                        <img src="/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                        <div className="imageTag">
                            <p>Sport</p>
                            <p>Diving</p>
                        </div>
                    </div>
                    <div className="imageBox" style={{position:"relative"}}>
                        <img src="/home2.jpeg" alt="" width={300} height={300}/>
                        <img src="/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                        <div className="imageTag">
                            <p>Sport</p>
                            <p>Diving</p>
                        </div>
                    </div>
                    <div className="imageBox" style={{position:"relative"}}>
                        <img src="/home2.jpeg" alt="" width={300} height={300}/>
                        <img src="/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                        <div className="imageTag">
                            <p>Sport</p>
                            <p>Diving</p>
                        </div>
                    </div>
                    <div className="imageBox" style={{position:"relative"}}>
                        <img src="/home2.jpeg" alt="" width={300} height={300}/>
                        <img src="/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                        <div className="imageTag">
                            <p>Sport</p>
                            <p>Diving</p>
                        </div>
                    </div>
                    <div className="imageBox" style={{position:"relative"}}>
                        <img src="/home2.jpeg" alt="" width={300} height={300}/>
                        <img src="/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                        <div className="imageTag">
                            <p>Sport</p>
                            <p>Diving</p>
                        </div>
                    </div>
                    <div className="imageBox" style={{position:"relative"}}>
                        <img src="/home2.jpeg" alt="" width={300} height={300}/>
                        <img src="/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                        <div className="imageTag">
                            <p>Sport</p>
                            <p>Diving</p>
                        </div>
                    </div>
                    <div className="imageBox" style={{position:"relative"}}>
                        <img src="/home2.jpeg" alt="" width={300} height={300}/>
                        <img src="/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                        <div className="imageTag">
                            <p>Sport</p>
                            <p>Diving</p>
                        </div>
                    </div>
                    <div className="imageBox" style={{position:"relative"}}>
                        <img src="/home2.jpeg" alt="" width={300} height={300}/>
                        <img src="/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                        <div className="imageTag">
                            <p>Sport</p>
                            <p>Diving</p>
                        </div>
                    </div>
                    <div className="imageBox" style={{position:"relative"}}>
                        <img src="/home2.jpeg" alt="" width={300} height={300}/>
                        <img src="/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                        <div className="imageTag">
                            <p>Sport</p>
                            <p>Diving</p>
                        </div>
                    </div>
                    <div className="imageBox" style={{position:"relative"}}>
                        <img src="/home2.jpeg" alt="" width={300} height={300}/>
                        <img src="/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                        <div className="imageTag">
                            <p>Sport</p>
                            <p>Diving</p>
                        </div>
                    </div>
                    <div className="imageBox" style={{position:"relative"}}>
                        <img src="/home2.jpeg" alt="" width={300} height={300}/>
                        <img src="/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                        <div className="imageTag">
                            <p>Sport</p>
                            <p>Diving</p>
                        </div>
                    </div>
            
                </div>
            </div>
        </>

    )
}
export default MainContent;