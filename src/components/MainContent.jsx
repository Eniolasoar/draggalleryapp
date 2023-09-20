import "./MainContent.css";
import React, { useState } from 'react'; 
function MainContent(){
    const [heartColor, setBackgroundColor] = useState('#9CA3AF');

  const handleClick = () => {
    setBackgroundColor('red');
  };
    return(
        <div className="main-content">
            <h1 className="galleryHeading">Welcome to Your Gallery</h1>
            <div className="inputContainer">
                <input type="text" placeholder="Search by tags" className="tagInput"/>
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

    )
}
export default MainContent;