import React from "react";
import "./App.css";
import { useState } from "react";

const Lamps = () => {
  const [lampOn, turnOn] = useState(false);
  return (
    <div className="lamp-wrapper">
      {!lampOn ? (
        <div onClick={() => turnOn(true)}>
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
