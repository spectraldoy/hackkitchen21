import './App.css';
import React from "react";
import openai from "openai-api";

async function GPTOut(prompt_) {
    const gptResponse = await openai.complete({
        engine: 'davinci',
        prompt: prompt_,
        maxTokens: 5,
        temperature: 0.9,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ['\n', "testing"]
    });
            
    console.log(gptResponse.data);
};

export default GPTOut;
