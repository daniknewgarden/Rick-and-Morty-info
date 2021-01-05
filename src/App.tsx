import React from "react";
import "./App.css";
import Button from "./Components/Button";
import Checkbox from "./Components/Checkbox";
import Subtitle from "./Components/Subtitle";
//Components
import Title from "./Components/Title";

function App() {
  const handleClick = () => {
    console.log("click");
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? console.log(`Added ${e.target.value}`)
      : console.log(`removed ${e.target.value}`);
  };

  return (
    <div className="App">
      <Title text="Book hotel" />
      <Subtitle text="Look for any hotels and choose the most comfortable" />
      <Button callBack={handleClick} text="Book now" ariaLabel={"Button"} />
      <div className="options">
        <Checkbox name="pets" text="Pets" onCheck={handleCheck} />
        <Checkbox name="children" text="Children" onCheck={handleCheck} />
      </div>
    </div>
  );
}

export default App;
