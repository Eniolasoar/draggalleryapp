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
        "src":"/enviroment2.jpeg",
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
  const [languages, setLanguages] = useState([
    "/home1.jpeg",
    "/home2.jpeg",
    "/home3.jpeg",
    "/home4.jpeg",
    "/home5.jpeg",
    "/home6.jpeg",
  ]);

  const handleClick = () => {
    setBackgroundColor("red");
  };
  function handleDragEnd(event) {
    console.log("welcome");
    const { active, over } = event;
    if (active.id !== over.id) {
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
  function searchTag() {
    let input = document.getElementById("input").value;
    let imageList = document.getElementsByClassName("images");
    for (let i = 0; i < imageList.length; i++) {
      imageList[i].style.display = "none";
    }

    let searchQuery = document.getElementsByClassName("search");
    for (let i = 0; i < searchQuery.length; i++) {
      searchQuery[i].style.display = "none";
    }

    // Iterate over imageData and display images based on tags and classes
    imageData.forEach((item) => {
      if (item.tags.toLowerCase() === input.toLowerCase()) {
        const imagesWithClass = document.getElementsByClassName(item.class);
        for (let i = 0; i < imagesWithClass.length; i++) {
          imagesWithClass[i].style.display = "block";
        }
      }
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
              items={imageData}
              strategy={verticalListSortingStrategy}
            >
              {imageData.map((item) => (
                <SortableImage
                  key={item.src}
                  id={item}
                  src={item.src}
                  className={item.class}
                  tag={item.tags}
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
