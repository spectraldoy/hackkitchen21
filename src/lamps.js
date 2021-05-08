import React from "react";
import "./App.css";
import { useState } from "react";

require('dotenv').config()
const OpenAI = require('openai-api');
// apparently we shouldn't include the key directly in the file
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
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
            
    return gptResponse.data.choices.text;
};

const Lamps = () => {
  const [lampOn, turnOn] = useState(false);
  return (
    <div className="lamp-wrapper">
      {!lampOn ? (
        <div onClick={() => {turnOn(true); GPTOut("Come up with a recipe using mushrooms.");}}>
          <img src="/LampOff.png" alt="lamp off" />
        </div>
      ) : (
        <div onClick={() => turnOn(false)}>
          <img src="/LampOn.png" alt="lamp on" />
        </div>
      )}
    </div>
  );
};

export default Lamps;
