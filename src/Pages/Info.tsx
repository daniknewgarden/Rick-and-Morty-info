import React from "react";
//Routing
import { useHistory } from "react-router-dom";
//Components
import Avatar from "../Components/Avatar";
import DescriptionItem from "../Components/DescriptionItem";
import ListCard from "../Components/ListCard";
import Button from "../Components/Button";
//GraphQL
import { useQuery } from "@apollo/client";
import GET_CHARACTER_INFO from "../GraphQL/getCharacterInfo";

type InfoPageTypes = {
  id: string;
  loadImage: boolean;
  loadEpisode: boolean;
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

  const Episodes: Array<React.ReactElement> = data?.character.episode?.map(
    (item: any, index: number) => <li key={index}>{item.name}</li>
  );

  return (
    <div>
      {data && (
        <>
          <Avatar
            image={loadImage ? data.character.image : null}
            name={data.character.name}
            subtitle={data.character.status}
          />

          <div>
            <DescriptionItem
              item="Species"
              description={data.character.species}
            />
            <DescriptionItem
              item="Gender"
              description={data.character.gender}
            />
          </div>
          {loadEpisode && <ListCard title="Episodes" listItems={Episodes} />}
        </>
      )}
      <Button
        callBack={() => history.push("/home")}
        text="Back to choose"
        ariaLabel="Back"
        rounded={true}
      />
    </div>
  );
};

export default InfoPage;
