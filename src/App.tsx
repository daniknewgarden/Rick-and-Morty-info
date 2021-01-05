import React from "react";
import "./App.css";
import Button from "./Components/Button";
import Subtitle from "./Components/Subtitle";
//Components
import Title from "./Components/Title";

function App() {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div className="App">
      <Title text="Book hotel"></Title>
      <Subtitle text="Look for any hotels and choose the most comfortable"></Subtitle>
      <Button
        callBack={handleClick}
        text="Book now"
        ariaLabel={"Button"}
      ></Button>
    </div>
  );
}

export default App;
