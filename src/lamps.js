import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

require('dotenv').config()
const OpenAI = require('openai-api');
// apparently we shouldn't include the key directly in the file
const OPENAI_API_KEY = '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';
const openai = new OpenAI(OPENAI_API_KEY);

async function GPTOut(prompt_) {
    const gptResponse = await openai.complete({
        engine: 'davinci',
        prompt: prompt_,
        maxTokens: 12,
        temperature: 0.9,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ['\n', "testing"]
    });
    console.log(gptResponse.data)
            
    return console.log(gptResponse.data);
};


const Lamps = () => {
  const [lampOn, turnOn] = useState(false);

  const updateBGColor = () => {
    document.body.style.background = lampOn ? "white" : "#282c34";
  }

  useEffect(() => {
    updateBGColor();
  })

  return (
    <div className="lamp-wrapper">
      {!lampOn ? (
        <div onClick={() => {
            turnOn(true); 
            GPTOut("Come up with a recipe for mushroom soup.");
            updateBGColor();
          }}>
          <img className="Lamp" src="/LampOff.png" alt="lamp off" />
        </div>
      ) : (
        <div onClick={() => {
            turnOn(false);
            updateBGColor();
          }}>
          <img className="Lamp" src="/LampOn.png" alt="lamp on" />
        </div>
      )}
    </div>
  );
};

export default Lamps;
