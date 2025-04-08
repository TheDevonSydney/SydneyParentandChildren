import React, { useState } from "react";
import ChildComponent from "./ChildComponent"; // Import the Child Component

// Define the content for both categories
const contentOptions = [
  {
    question: "What is the best vaction location?",
    images: [
      { src: "/images/Japan.jpg", text: "Japan" },
      { src: "/images/Iceland.webp", text: "Iceland" },
      { src: "/images/Tulum.jpg", text: "Tulum" }
    ]
  },
  {
    question: "Who will win MVP in 2025?",
    images: [
      { src: "/images/Shai.webp", text: "Shai Gilgeous-Alexander" },
      { src: "/images/Jokic.jpg", text: "Nikola Jokic" },
      { src: "/images/Giannis.jpg", text: "Giannis Antentokounmpo" }
    ]
  }
];

function ParentComponent() {
  const [childStates, setChildStates] = useState([
    { imageIndex: 0 },
    { imageIndex: 0 }
  ]);

  const updateChild = (index) => {
    setChildStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index].imageIndex = (newStates[index].imageIndex + 1) % 3; // Cycle through 3 images
      return newStates;
    });
  };

  return (
    <div>
      <h1>Best Vacation and MVP Prediction</h1>
      {contentOptions.map((content, index) => (
        <ChildComponent
          key={index}
          question={content.question}
          image={content.images[childStates[index].imageIndex].src}
          text={content.images[childStates[index].imageIndex].text}
          onClick={() => updateChild(index)}
        />
      ))}
    </div>
  );
}

export default ParentComponent;
