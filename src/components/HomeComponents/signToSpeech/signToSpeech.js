import React, { useEffect, useState } from "react";
import "./signToSpeech.css";
import { FaVolumeUp, FaMicrophone, FaRegCheckCircle, FaLanguage } from "react-icons/fa";

function SignToSpeech() {
  const [livePrediction, setLivePrediction] = useState("...");
  const [rawText, setRawText] = useState("...");
  const [finalText, setFinalText] = useState("...");

  const speak = async (text, lang) => {
    try {
      const response = await fetch("http://localhost:5000/speak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, lang }),
      });

      if (!response.ok) throw new Error("Failed to fetch audio");
      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      const audio = new Audio(audioUrl);
      await audio.play();
    } catch (error) {
      console.error("Speech playback error:", error);
    }
  };

  const fetchText = async () => {
    try {
      const res = await fetch("http://localhost:5000/get_text");
      const data = await res.json();
      setLivePrediction(data.live_prediction);
      setRawText(data.raw_text);
      setFinalText(data.final_text);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const finalizeText = async () => {
    await fetch("http://localhost:5000/finalize_text", { method: "POST" });
    fetchText();
  };

  useEffect(() => {
    const interval = setInterval(fetchText, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1><FaLanguage style={{ marginRight: 10 }} /> SIGN TO SPEECH</h1>

      <div className="video-container">
        <img src="http://localhost:5000/video_feed" alt="Sign Stream" />
      </div>

      <button onClick={finalizeText}>
        <FaRegCheckCircle style={{ marginRight: 8 }} />
        Finalize Text
      </button>

      <div className="text-display">
        <h3><FaMicrophone style={{ color: "#d35400", marginRight: 8 }} /> Live Prediction: {livePrediction}</h3>
        <h4>Constructed Sentence: {rawText}</h4>
        <h5>Final Text: {finalText}</h5>
      </div>

      <div className="tts-buttons">
        <h4><FaVolumeUp /> Convert Final Text to Speech:</h4>
        <button onClick={() => speak(finalText, "en")}>Speak English</button>
        <button onClick={() => speak(finalText, "hi")}>Speak Hindi</button>
        <button onClick={() => speak(finalText, "mr")}>Speak Marathi</button>
      </div>
    </div>
  );
}

export default SignToSpeech;
