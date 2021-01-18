import React, { useState } from "react";

import "./App.css";
import Button from "./Components/Button";
import Checkbox from "./Components/Checkbox";
import Dropdown from "./Components/Dropdown";
import DropdownItem from "./Components/DropdownItem";
import Subtitle from "./Components/Subtitle";
//Components
import Title from "./Components/Title";

import { useQuery } from "@apollo/client";
import GET_CHARACTERS from "./GraphQL/getCharacters";

//API call types
type Character = {
  id: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  __typename: string;
};

function App() {
  const [inputValue, setInputValue] = useState("");

  const { data, loading } = useQuery(GET_CHARACTERS, {
    variables: { name: inputValue, image: false },
  });

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
    setInputValue(e.target.value);
  };

  const handleChoose = (itemId: String) => {
    console.log(itemId);
  };

  const Items: Array<React.ReactElement> = data?.characters.results.map(
    (item: Character) => (
      <DropdownItem
        key={item.id}
        title={item.name}
        subtitle={item.status}
        onClick={() => handleChoose(item.id)}
      />
    )
  );

  return (
    <div className="App">
      <Title text="Book hotel" />
      <Subtitle text="Look for any hotels and choose the most comfortable" />
      <div className="content">
        <Dropdown
          onChange={handleChange}
          listItems={
            Items ? Items : loading ? "Loading..." : "Nothing found :("
          }
          ariaLabel="Search hotel"
        />
        <div className="options">
          <Checkbox name="image" text="Load image" onCheck={handleCheck} />
          <Checkbox
            name="children"
            text="Load episodes"
            onCheck={handleCheck}
          />
        </div>
        <Button callBack={handleClick} text="Book now" ariaLabel={"Button"} />
      </div>
    </div>
  );
}

export default App;
