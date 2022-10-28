import React from "react";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";

const ELEMENTS = [
  <h1 className="welcome">WELCOME TO GLARUS TECHNOLOGIES</h1>,
  <p className="welcome-text">
    We specializes in Web, Mobile, Embedded, IoT, Robotics, Drone and Automotive
    Solutions. We have in-house expertise to guide you through your entire
    development journey - from consult, design, development, deployment and to
    manufacturing process.
  </p>,
  <img src={img1} className="home-img" alt="" />,
  <img src={img2} className="home-img" alt="" />,
  <img src={img3} className="home-img" alt="" />,
  <p className="welcome-text">
    This assignment done by <br />
    &mdash; Abhishek Prasad
  </p>,
];

function Home() {
  const [glarusElements, setGlarusElements] = useState(ELEMENTS);

  const handleDragEnd = (status) => {
    if (!status.destination) return;

    const items = [...glarusElements];
    const [currDragedItem] = items.splice(status.source.index, 1);
    items.splice(status.destination.index, 0, currDragedItem);
    setGlarusElements(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="glarus">
        {(provided) => (
          <ul
            className="home-ul"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {glarusElements.map((element, index) => (
              <Draggable
                key={index}
                draggableId={index.toString()}
                index={index}
              >
                {(provided) => (
                  <li
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {element}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Home;
