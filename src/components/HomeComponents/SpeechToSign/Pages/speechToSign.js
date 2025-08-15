import './convert.css'
import React, { useState, useEffect, useRef } from "react";

import character from "../Models/Models/xbot/xbot.glb";
import ybot from '../Models/Models/ybot/ybot.glb';
import xbotPic from '../Models/Models/xbot/xbot.png';
import ybotPic from '../Models/Models/ybot/ybot.png';

import * as words from '../Animations/Animations/words';
import * as alphabets from '../Animations/Animations/alphabets';
import { defaultPose } from '../Animations/Animations/defaultPose';

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Convert() {
  const [text, setText] = useState("");
  const [bot, setBot] = useState(ybot);
  const [speed] = useState(0.6);
  const [pause] = useState(300);

  const componentRef = useRef({});
  const { current: ref } = componentRef;

  let textFromAudio = useRef();
  let textFromInput = useRef();

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    ref.flag = false;
    ref.pending = false;
    ref.animations = [];
    ref.characters = [];

    ref.scene = new THREE.Scene();
    ref.scene.background = new THREE.Color(0xdddddd);

    const spotLight = new THREE.SpotLight(0xffffff, 1.5);
    spotLight.position.set(0, 5, 2);
    ref.scene.add(spotLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 2, 3);
    ref.scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ref.scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5);
    hemiLight.position.set(0, 1, 0);
    ref.scene.add(hemiLight);

    ref.renderer = new THREE.WebGLRenderer({ antialias: true });
    ref.camera = new THREE.PerspectiveCamera(
      30,
      1,
      0.1,
      1000
    );

    ref.renderer.setSize(520, 520);
    document.getElementById("canvas").innerHTML = "";
    document.getElementById("canvas").appendChild(ref.renderer.domElement);

    ref.camera.position.z = 1.6;
    ref.camera.position.y = 1.4;

    const loader = new GLTFLoader();
    loader.load(
      bot,
      (gltf) => {
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (!child.material || child.material.color.getHex() === 0x000000) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0xcccccc,
                roughness: 0.4,
                metalness: 0.3
              });
            }
          }
        });

        ref.avatar = gltf.scene;
        ref.scene.add(ref.avatar);
        defaultPose(ref);
      },
      (xhr) => console.log(xhr)
    );
  }, [ref, bot]);

  ref.animate = () => {
    if (ref.animations.length === 0) {
      ref.pending = false;
      return;
    }
    requestAnimationFrame(ref.animate);
    if (ref.animations[0].length) {
      if (!ref.flag) {
        if (ref.animations[0][0] === 'add-text') {
          setText(text + ref.animations[0][1]);
          ref.animations.shift();
        } else {
          for (let i = 0; i < ref.animations[0].length;) {
            let [boneName, action, axis, limit, sign] = ref.animations[0][i];
            const bone = ref.avatar.getObjectByName(boneName);
            if (!bone) { i++; continue; }
            if (sign === "+" && bone[action][axis] < limit) {
              bone[action][axis] += speed;
              bone[action][axis] = Math.min(bone[action][axis], limit);
              i++;
            } else if (sign === "-" && bone[action][axis] > limit) {
              bone[action][axis] -= speed;
              bone[action][axis] = Math.max(bone[action][axis], limit);
              i++;
            } else {
              ref.animations[0].splice(i, 1);
            }
          }
        }
      }
    } else {
      ref.flag = true;
      setTimeout(() => { ref.flag = false }, pause);
      ref.animations.shift();
    }
    ref.renderer.render(ref.scene, ref.camera);
  };

  const sign = (inputRef) => {
    const str = inputRef.current.value.toUpperCase();
    const strWords = str.split(' ');
    setText('');
    for (let word of strWords) {
      if (words[word]) {
        ref.animations.push(['add-text', word + ' ']);
        words[word](ref);
      } else {
        for (const [index, ch] of word.split('').entries()) {
          ref.animations.push(['add-text', ch + (index === word.length - 1 ? ' ' : '')]);
          alphabets[ch](ref);
        }
      }
    }
  };

  const startListening = () => SpeechRecognition.startListening({ continuous: true });
  const stopListening = () => SpeechRecognition.stopListening();

  return (
    <div className="convert-container">
      <div className="top-section">
        {/* Left - Text and controls */}
        <div className="text-controls">
          <label>Processed Text</label>
          <textarea rows={3} value={text} readOnly />
          <label>Speech Recognition: {listening ? 'on' : 'off'}</label>
          <div className="btn-row">
            <button onClick={startListening}>🎙️ Mic On</button>
            <button onClick={stopListening}>🔇 Mic Off</button>
            <button onClick={resetTranscript}>🧹 Clear</button>
          </div>
          <textarea rows={3} ref={textFromAudio} value={transcript} placeholder="Speech input..." />
          <button onClick={() => sign(textFromAudio)}>Start Animations (Speech)</button>
          <label>Text Input</label>
          <textarea rows={3} ref={textFromInput} placeholder="Type text here..." />
          <button onClick={() => sign(textFromInput)}>Start Animations (Text)</button>
        </div>

        {/* Right - Render box */}
        <div className="render-box">
          <div id="canvas" />
        </div>
      </div>

      {/* Bottom - Avatar selection */}
      <div className="bottom-bar">
        <div className="avatar-section">
          <p>Select Avatar</p>
          <div className="avatar-row">
            <img src={xbotPic} onClick={() => setBot(character)} alt="XBot" />
            <img src={ybotPic} onClick={() => setBot(ybot)} alt="YBot" />
          </div>
          <small>Speed: {Math.round(speed * 100) / 100} | Pause: {pause}ms</small>
        </div>
      </div>
    </div>
  );
}

export default Convert;
