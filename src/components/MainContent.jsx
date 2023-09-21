import "./MainContent.css";
import React, { useState } from 'react'; 
import NavBar from "./NavBar";
import {DndContext,closestCenter} from '@dnd-kit/core';
import { arrayMove,SortableContext,verticalListSortingStrategy } from "@dnd-kit/sortable";
import  SortableImage from "./SortableImage.jsx";
function MainContent(){
    const [heartColor, setBackgroundColor] = useState('#9CA3AF');
    const [languages,setLanguages]=useState(["/home1.jpeg","/home2.jpeg","/home3.jpeg","/home4.jpeg","/home5.jpeg","/home6.jpeg"]);

  const handleClick = () => {
    setBackgroundColor('red');
  };
  function handleDragEnd(event){
    console.log("welcome");
    const {active,over}=event;
    if(active.id !== over.id){
        setLanguages((items)=>{
            const activeIndex=items.indexOf(active.id);
            const overIndex=items.indexOf(over.id);

            return arrayMove(items,activeIndex,overIndex);
        })
    }
  }
    return(
        <>
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
                <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <div className="imageContainer">
                       
                    <SortableContext items={languages} strategy={verticalListSortingStrategy}>
                        {languages.map(language=><SortableImage key={language} id={language}/>)}
                    </SortableContext>
                    </div>

                    

                        
                </DndContext>
            </div>
        </>

    )
}
export default MainContent;