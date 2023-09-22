import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./MainContent.css";
import React, { useState } from 'react'; 

function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transistion } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transistion,
  };

  const [heartColor, setBackgroundColor] = useState('#9CA3AF');
  

const handleClick = () => {
  setBackgroundColor('red');
};

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="imageBox" style={{position:"relative",display: props.hidden? "none" : "block"}}>
        {console.log("Hidden",props.hidden)};
                        <img src={props.src} alt="" width={300} height={300} className="images" id=""/>
                        <img src="/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                        <div className="imageTag">
                            <p>{props.tag}</p>
                          
                        </div>
                    </div>
    </div>
  );
}
export default SortableItem;
