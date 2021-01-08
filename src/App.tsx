import React, { useState } from "react";

import "./App.css";
import Button from "./Components/Button";
import Checkbox from "./Components/Checkbox";
import Dropdown from "./Components/Dropdown";
import DropdownItem from "./Components/DropdownItem";
import RangeDatePicker from "./Components/RangeDatePicker";
import Subtitle from "./Components/Subtitle";
//Components
import Title from "./Components/Title";

//API call types
type hotelsList = {
  id: number;
  name: string;
  parents: string;
  region: {
    id: number;
    name: string;
  };
};

function App() {
  const [hotels] = useState<Array<hotelsList>>([
    {
      id: 62566,
      name: "Thessaly",
      parents: "Греция",
      region: {
        id: 30,
        name: "Thessaloniki",
      },
    },
    {
      id: 616,
      name: "Thessaloniki",
      parents: "Греция",
      region: {
        id: 30,
        name: "Thessaloniki",
      },
    },
  ]);

  const handleClick = () => {
    console.log("click");
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? console.log(`Added ${e.target.value}`)
      : console.log(`removed ${e.target.value}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleChoose = (item: any) => {
    console.log(item);
  };

  const hotelItems: Array<React.ReactElement> = hotels.map(
    (item: hotelsList, index: number) => (
      <DropdownItem
        onClick={() => handleChoose(item)}
        name={item.name}
        region={item.region.name}
        key={index}
      />
    )
  );

  return (
    <div className="App">
      <Title text="Book hotel" />
      <Subtitle text="Look for any hotels and choose the most comfortable" />
      <div className="content">
        <Dropdown onChange={handleChange} listItems={hotelItems} />
        <div className="options">
          <Checkbox name="pets" text="Pets" onCheck={handleCheck} />
          <Checkbox name="children" text="Children" onCheck={handleCheck} />
        </div>
        <RangeDatePicker />
        <Button callBack={handleClick} text="Book now" ariaLabel={"Button"} />
      </div>
    </div>
  );
}

export default App;
