import React, { useState, useEffect } from "react";
//Routing
import { useHistory } from "react-router-dom";
//Components
import Button from "../Components/Button";
import Title from "../Components/Title";
//GraphQL
import { useQuery } from "@apollo/client";
import GET_CHARACTER_INFO from "../GraphQL/getCharacterInfo";

type InfoPageTypes = {
  id: string;
  loadImage: boolean;
  loadEpisode: Boolean;
};

const InfoPage: React.FC<InfoPageTypes> = ({
  id = "1",
  loadImage,
  loadEpisode,
}) => {
  const history = useHistory();

  const { data, loading, error } = useQuery(GET_CHARACTER_INFO, {
    variables: { id: id, image: loadImage, episode: loadEpisode },
  });

  return (
    <div>
      <Title text={data ? data.character.name : loading ? "Loading" : error} />
      <Button
        callBack={() => history.push("/home")}
        text="Back to choose"
        ariaLabel="Back"
      />
    </div>
  );
};

export default InfoPage;
