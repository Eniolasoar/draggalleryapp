import "./MainContent.css";
import React, { useState } from "react";
import NavBar from "./NavBar";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableImage from "./SortableImage.jsx";
const imageData=[
    {
        "src":"/nature1.jpeg",
        "tags":"Nature",
        "class":"nature"
    },
    {
        "src":"/nature2.jpeg",
        "tags":"Nature",
        "class":"nature"
    },
    {
        "src":"/environment.jpeg",
        "tags":"Environment",
        "class":"environment"
    },
    {
        "src":"/environment2.jpeg",
        "tags":"Environment",
        "class":"environment"
    },
    {
        "src":"/environment3.jpeg",
        "tags":"Environment",
        "class":"environment"
    },
    {
        "src":"/sky.jpeg",
        "tags":"sky",
        "class":"sky"
    },
    {
        "src":"/sky2.jpeg",
        "tags":"sky",
        "class":"sky"
    },
    {
        "src":"/sky3.jpeg",
        "tags":"sky",
        "class":"sky"
    },
    {
        "src":"/food1.jpeg",
        "tags":"food",
        "class":"food"
    },
    {
        "src":"/food2.jpeg",
        "tags":"food",
        "class":"food"
    }
]
function MainContent() {
  const [heartColor, setBackgroundColor] = useState("#9CA3AF");
  const [images, setImages] = useState(imageData);

  const handleClick = () => {
    setBackgroundColor("red");
  };
  function handleDragEnd(event) {
    const { active, over } = event;
    console.log("INITIAL ACTIVE:",active.id)
    console.log("INITIAL OVER:",over.id)
    if (active.id.src !== over.id.src) {
      setImages((items) => {

        const activeIndex = items.findIndex((item) => 
        item.src === active.id.src)
        items.findIndex((item) => 
        console.log("ACITVE SRC:",active.id.src));
        const overIndex = items.findIndex((item) => item.src === over.id.src);

        const newImages = [...items];

        // Remove the active item from the array
        const movedItem = newImages.splice(activeIndex, 1)[0];
  
        // Insert the movedItem at the overIndex
        newImages.splice(overIndex, 0, movedItem);
  
        return newImages;
      });
    }
  }

  function searchTag() {
    const input = document.getElementById("input").value.toLowerCase();
  
    setImages((items) => {
      const updatedItems = items.map((item) => ({
        ...item,
        hidden: item.tags.toLowerCase() !== input,
      }));
      console.log(updatedItems);
      return updatedItems;
    });
  }
  
  
  return (
    <>
      <div className="main-content">
        <h1 className="galleryHeading">Welcome to Your Gallery</h1>
        <div className="inputContainer">
          <input
            list="tags"
            placeholder="Search by tags"
            className="tagInput"
            id="input"
          />
          <datalist id="tags">
            <option>Nature</option>
            <option>Environment</option>
            <option>Birds</option>
            <option>Foods</option>
          
          </datalist>
          <button onClick={searchTag}>Search</button>
        </div>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <div className="imageContainer">
            <SortableContext
              items={images}
              strategy={verticalListSortingStrategy}
            >
              {images.map((item) => (
                <SortableImage
                  key={item.src}
                  id={item}
                  src={item.src}
                  className={item.class}
                  tag={item.tags}
                  hidden={item.hidden}
                />
              ))}
            </SortableContext>
          </div>
        </DndContext>
      </div>
    </>
  );
}
export default MainContent;
