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
    <div className="info-page">
      <div className="info-page__content">
        {data && (
          <>
            <Avatar
              image={loadImage ? data.character.image : null}
              name={data.character.name}
              subtitle={data.character.status}
            />

            <ul className="info-page__list">
              <DescriptionItem
                item="Species"
                description={data.character.species}
              />
              <DescriptionItem
                item="Gender"
                description={data.character.gender}
              />
            </ul>

            {loadEpisode && (
              <ListCard title="Episodes" listItems={Episodes} className="info-page__card" />
            )}
          </>
        )}
        <Button
          callBack={() => history.push("/home")}
          text="Back to choose"
          ariaLabel="Back"
          rounded={true}
        />
      </div>
    </div>
  );
};

export default InfoPage;
