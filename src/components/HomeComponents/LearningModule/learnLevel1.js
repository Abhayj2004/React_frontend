import React, { useState } from "react";
import './learnLevel1.css';

function LearnL1() {
  const [selectedImage, setSelectedImage] = useState("letters/A.jpg");
  const [selectedLetter, setSelectedLetter] = useState("A");

  const sampleVideos = Array.from({ length: 26 }, (_, i) => {
    const letter = String.fromCharCode(65 + i);
    return {
      title: `LETTER '${letter}'`,
      image: `/Level1/${letter}.jpg`,
      letter: letter,
    };
  });

  return (
    <div className="learning-wrapper">
      <div className="left-panel">
        <div className="preview-card">
          <h2>LEVEL 1 - Learning</h2>
          <h3>Letter: {selectedLetter}</h3>
          <div className="image-box">
            <img src={selectedImage} alt={`Letter ${selectedLetter}`} />
          </div>
        </div>
      </div>

      <div className="right-panel">
        <h2>Choose a Letter</h2>
        <div className="grid-wrapper">
          {sampleVideos.map((video, index) => (
            <div
              key={index}
              className="letter-card"
              onClick={() => {
                setSelectedImage(video.image);
                setSelectedLetter(video.letter);
              }}
            >
              <div className="letter-title">{video.title}</div>
              <div className="letter-footer">{video.letter}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LearnL1;
