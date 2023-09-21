import "./MainContent.css";
import React, { useState } from "react";
import NavBar from "./NavBar.jsx";
import { DndContext } from "@dnd-kit/core";
import DraggableImage from "./DraggableImage.jsx"
function MainContent() {
    const [heartColor, setBackgroundColor] = useState("#9CA3AF");
    const [parent, setParent] = useState(null);

    const handleClick = () => {
      setBackgroundColor("red");
    };
    function handleDragEnd(event) {
        const {over} = event;
    
        // If the item is dropped over a container, set it as the parent
        // otherwise reset the parent to `null`
        setParent(over ? over.id : null);
      }
      {parent === null ? draggableMarkup : null}
  return (
    <>
      <div className="main-content">
        <h1 className="galleryHeading">Welcome to Your Gallery</h1>
        <div className="inputContainer">
          <input
            list="tags"
            placeholder="Search by tags"
            className="tagInput"
          />
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
        <DndContext onDragEnd={handleDragEnd}>
          
            <div className="imageContainer">
              {[1, 2, 3, 4].map((index) => (
                <DraggableImage key={index} onClick={handleClick}/>
              ))}
            </div>
        </DndContext>
      </div>
    </>
  );
}
export default MainContent;
