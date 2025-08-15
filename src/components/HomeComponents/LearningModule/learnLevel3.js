import React, { useState } from 'react';
import './learnLevel3.css';
import { FaRegSmileBeam, FaHandPeace } from 'react-icons/fa';
import { MdPlayCircleFilled } from 'react-icons/md';

const LearnL3 = () => {
  const [activeVideo, setActiveVideo] = useState('can_i_help_you.mp4');

  const videos = [
    { text: "Can I help you?", filename: "can_i_help_you.mp4" },
    { text: "Help me", filename: "help_me.mp4" },
    { text: "Hi, how are you?", filename: "hi_how_are_you.mp4" },
    { text: "No need to worry", filename: "no_need_to_worry.mp4" },
    { text: "This place is beautiful", filename: "this_place_is_beautiful.mp4" },
    { text: "What do you do?", filename: "what_do_you_do.mp4" },
  ];

  const videoSrc = `${process.env.PUBLIC_URL}/Level3/${activeVideo}`;

  const handleVideoChange = (filename) => {
    setActiveVideo(filename);
  };

  return (
    <div className="level3-container">
      <h2 className="level3-heading">
        <FaHandPeace className="icon-left" />
        Level 3 - Learn Sentences
        <FaRegSmileBeam className="icon-right" />
      </h2>

      <div className="level3-layout">
        {/* Left - Video Preview */}
        <div className="video-section">
          <div className="video-card">
            <div className="video-title">Watch & Learn</div>
            <video key={videoSrc} className="video-player" controls>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right - Sentence List */}
        <div className="sentence-section">
          <div className="select-heading">Choose a Sentence</div>
          <div className="sentence-list">
            {videos.map((video, index) => (
              <button
                key={index}
                onClick={() => handleVideoChange(video.filename)}
                className={`sentence-button ${activeVideo === video.filename ? 'active' : ''}`}
              >
                <MdPlayCircleFilled size={22} />
                {video.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnL3;
