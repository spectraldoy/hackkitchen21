import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

require('dotenv').config()
const OpenAI = require('openai-api');
// apparently we shouldn't include the key directly in the file
const OPENAI_API_KEY = SECRET_KEY;
const openai = new OpenAI(OPENAI_API_KEY);


const Lamps = () => {
  const [lampOn, turnOn] = useState(false);
  const [recipeData, changeRecipeData] = useState('');
  const [loading, setLoading] = useState(false);

  async function GPTOut(prompt_) {
    setLoading(true);

    const gptResponse = await openai.complete({
        engine: 'davinci',
        prompt: prompt_,
        maxTokens: 25,
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
            
    changeRecipeData(gptResponse.data.choices[0].text);

    setLoading(false);

    console.log(recipeData);
  };

  const updateBGColor = () => {
    document.body.style.background = lampOn ? "white" : "#282c34";
  }

  useEffect(() => {
    updateBGColor();
  });

  return (
    <div className="lamp-wrapper">
      {!lampOn ? (
        <div onClick={() => {
            turnOn(true); 
            GPTOut("Come up with a recipe for pizza.");
            updateBGColor();
          }}>
          <img className="Lamp" src="/LampOff.png" alt="lamp off" />
        </div>
      ) : (
        <div className="Lamp2" onClick={() => {
            turnOn(false);
            updateBGColor();
          }}>
          <img className="Lamp" src="/LampOn.png" alt="lamp on" />
          <p>
            {loading ? "Loading Recipe Inspiration..." : recipeData}
          </p>
        </div>
      )}
    </div>
  );
};

export default Lamps;
