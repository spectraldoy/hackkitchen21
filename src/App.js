import React from "react";
import "./App.css";
import Lamp from "./lamps";

function App() {
  return (
    <div className="Screen">
      <h1 className="main-text">Recipe Inspiration Lamp</h1>
      <div className="App">
        <Lamp />
      </div>
    </div>
  );
}

export default App;
