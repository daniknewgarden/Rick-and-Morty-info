import React, { useState } from "react";
//Routing
import { useHistory } from "react-router-dom";
//Components
import Button from "../Components/Button";
import Checkbox from "../Components/Checkbox";
import Dropdown from "../Components/Dropdown";
import DropdownItem from "../Components/DropdownItem";
import Subtitle from "../Components/Subtitle";
import Title from "../Components/Title";
//GraphQL
import { useQuery } from "@apollo/client";
import GET_CHARACTERS from "../GraphQL/getCharacters";

//Props types
type HomePageTypes = {
  setCharacterId: (id: string) => void;
  setLoadImage: (value: boolean) => void;
  setLoadEpisode?: (value: Boolean) => void;
};

//API call types
type Character = {
  id: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  __typename: string;
};

const HomePage: React.FC<HomePageTypes> = ({
  setCharacterId,
  setLoadImage,
  setLoadEpisode,
}) => {
  const history = useHistory();

  const handleHistory = (): void => {
    history.push("/info");
  };

  const [inputValue, setInputValue] = useState("");

  const { data, loading } = useQuery(GET_CHARACTERS, {
    variables: { name: inputValue, image: false },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const toggleLoadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setLoadImage(true) : setLoadImage(false);
  };

  const handleChoose = (itemId: string) => {
    setCharacterId(itemId);
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
    <>
      <Title text="Search for characters" />
      <Subtitle
        text={`Search for all the characters from "Rick and Morty" and get information about them`}
      />
      <div className="content">
        <Dropdown
          onChange={handleChange}
          listItems={
            Items ? Items : loading ? "Loading..." : "Nothing found :("
          }
          ariaLabel="Search hotel"
        />
        <div className="options">
          <Checkbox name="image" text="Load image" onCheck={toggleLoadImage} />
          <Checkbox name="episode" text="Load episodes" onCheck={() => null} />
        </div>
        <Button
          callBack={handleHistory}
          text="Get info"
          ariaLabel={"Submit button"}
        />
      </div>
    </>
  );
};

export default HomePage;
