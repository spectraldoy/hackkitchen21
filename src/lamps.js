import React from "react";
import "./App.css";
import { useState } from "react";

require('dotenv').config()
const OpenAI = require('openai-api');
// apparently we shouldn't include the key directly in the file
const OPENAI_API_KEY = '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';
const openai = new OpenAI(OPENAI_API_KEY);


function changeBGColor(color) {
  document.body.style.background = color;
}

const Lamps = () => {
  const [lampOn, turnOn] = useState(false);
  const [recipeData, changeRecipeData] = useState('');

  async function GPTOut(prompt_) {
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
    console.log(recipeData);
  };


  return (
    <div className="lamp-wrapper">
      {!lampOn ? (
        <div onClick={() => {
            turnOn(true); 
            GPTOut("Come up with a recipe for pizza.");
            changeBGColor("white");
          }}>
          <img className="Lamp" src="/LampOff.png" alt="lamp off" />
        </div>
      ) : (
        <div onClick={() => {
            turnOn(false);
            changeBGColor("#282c34");
          }}>
          <img className="Lamp" src="/LampOn.png" alt="lamp on" />
          <p>
            {recipeData}
          </p>
        </div>
      )}
    </div>
  );
};

export default Lamps;
