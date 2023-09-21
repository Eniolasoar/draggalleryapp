import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";

function DraggableImage({ onClick }) {
    const { attributes, listeners, isDragging, setNodeRef } = useDraggable();

    const style = isDragging ? {
        opacity: 0.5,
    } : undefined;
 

  const [heartColor, setBackgroundColor] = useState("#9CA3AF");

  const handleClick = () => {
    setBackgroundColor("red");
  };

  return (
    <div
    ref={setNodeRef}
    {...attributes}
    {...listeners}
    className="imageBox"
    style={style}
    >
      <img src="/home2.jpeg" alt="" width={300} height={300} />
      <img
        src="/heart.svg"
        alt=""
        className="heart"
        onClick={onClick}
        style={{ backgroundColor: heartColor }}
      />
      <div className="imageTag">
        <p>Sport</p>
        <p>Diving</p>
      </div>
    </div>
  );
}

export default DraggableImage;
