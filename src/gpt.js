import './App.css';
import React from "react";

const OpenAI = require('openai-api');
// apparently we shouldn't include the key directly in the file
const OPENAI_API_KEY = "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";
const openai = new OpenAI(OPENAI_API_KEY);

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
