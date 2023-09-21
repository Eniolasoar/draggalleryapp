import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";

function DraggableImage({ onClick }) {
  const { attributes, listeners, isDragging, setNodeRef , transform} = useDraggable({
    id: "draggable",
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
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
