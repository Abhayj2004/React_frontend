import React, { useState } from "react";
import './learnLevel2.css';
import { FaRegSmile, FaHandPaper } from 'react-icons/fa';
import { GiTalk } from 'react-icons/gi';
import { MdEmojiObjects } from 'react-icons/md';

function LearnL2() {
  const [selectedImage, setSelectedImage] = useState("Words/ANGRY.jpg");
  const [selectedWord, setSelectedWord] = useState("ANGRY");

  const sampleWords = [
    { title: "Angry", image: "/Words/ANGRY.jpg", word: "ANGRY", icon: <FaHandPaper /> },
    { title: "Bad", image: "/Words/BAD.jpg", word: "BAD", icon: <FaRegSmile /> },
    { title: "Sleep", image: "/Words/BED.jpg", word: "SLEEP", icon: <MdEmojiObjects /> },
    { title: "Bored", image: "/Words/BORED.jpg", word: "BORED", icon: <GiTalk /> },
    { title: "Good", image: "/Words/GOOD.jpg", word: "GOOD", icon: <FaRegSmile /> },
    { title: "Help", image: "/Words/HELP.jpg", word: "HELP", icon: <GiTalk /> },
    { title: "Hungry", image: "/Words/HUNGRY.jpg", word: "HUNGRY", icon: <MdEmojiObjects /> },
    { title: "Talk", image: "/Words/TALK.jpg", word: "TALK", icon: <GiTalk /> },
    { title: "Water", image: "/Words/WATER.jpg", word: "WATER", icon: <FaRegSmile /> },
    { title: "Where", image: "/Words/WHERE.jpg", word: "WHERE", icon: <FaHandPaper /> },
    { title: "Who", image: "/Words/WHO.jpg", word: "WHO", icon: <GiTalk /> },
    { title: "You", image: "/Words/YOU.jpg", word: "YOU", icon: <FaRegSmile /> },
    { title: "Appreciate", image: "/Words/APPRECIATE.jpg", word: "APPRECIATE", icon: <MdEmojiObjects /> },
    { title: "Cold", image: "/Words/COLD.jpg", word: "COLD", icon: <FaRegSmile /> },
    { title: "Congratulation", image: "/Words/CONGRATULATIONS.jpg", word: "CONGRATULATION", icon: <FaHandPaper /> },
    { title: "Fever", image: "/Words/FEVER.jpg", word: "FEVER", icon: <FaRegSmile /> },
    { title: "Food", image: "/Words/FOOD.jpg", word: "FOOD", icon: <GiTalk /> },
    { title: "Friend", image: "Words/FRIEND.jpg", word: "FRIEND", icon: <FaHandPaper /> },
    { title: "Heart", image: "/Words/HEART.jpg", word: "HEART", icon: <FaRegSmile /> },
    { title: "Medicine", image: "/Words/MEDICINE.jpg", word: "MEDICINE", icon: <MdEmojiObjects /> },
    { title: "Welcome", image: "/Words/WELCOME.jpg", word: "WELCOME", icon: <GiTalk /> },
  ];

  return (
    <div className="learning-words-wrapper">
      <div className="left-panel">
        <div className="preview-card">
          <h2>LEVEL 2 - Words</h2>
          <h3>{selectedWord}</h3>
          <div className="image-box">
            <img src={selectedImage} alt={`Word ${selectedWord}`} />
          </div>
        </div>
      </div>

      <div className="right-panel">
        <h2>Choose a Word</h2>
        <div className="grid-wrapper">
          {sampleWords.map((wordItem, index) => (
            <div
              key={index}
              className="word-card"
              onClick={() => {
                setSelectedImage(wordItem.image);
                setSelectedWord(wordItem.word);
              }}
            >
              <div className="word-icon">{wordItem.icon}</div>
              <div className="word-title">{wordItem.title}</div>
              <div className="word-footer">{wordItem.word}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LearnL2;
