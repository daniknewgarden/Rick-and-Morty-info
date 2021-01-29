import React, { useEffect } from "react";
//Routing
import { useHistory } from "react-router-dom";
//Components
import Avatar from "../Components/Avatar";
import DescriptionItem from "../Components/DescriptionItem";
import ListCard from "../Components/ListCard";
import Button from "../Components/Button";
//GraphQL
import { useQuery } from "@apollo/client";
import GET_CHARACTER_INFO_QUERY from "../GraphQL/getCharacterInfoQuery";

type InfoPageTypes = {
  id: string;
  loadImage: boolean;
  loadEpisode: boolean;
  setCharacterId: (id: null) => void;
  setLoadImage: (value: boolean) => void;
  setLoadEpisode: (value: boolean) => void;
};

const InfoPage: React.FC<InfoPageTypes> = ({
  id = "1",
  loadImage,
  loadEpisode,
  setCharacterId,
  setLoadImage,
  setLoadEpisode,
}) => {
  const history = useHistory();

  const { data, loading, error } = useQuery(GET_CHARACTER_INFO_QUERY, {
    variables: { id: id, image: loadImage, episode: loadEpisode },
  });

  const Episodes: Array<React.ReactElement> = data?.character.episode?.map(
    (item: any, index: number) => <li key={index}>{item.name}</li>
  );

  useEffect(() => {
    return () => {
      setCharacterId(null);
      setLoadImage(false);
      setLoadEpisode(false);
    };
  }, []);

  return (
    <div className="info-page">
      <div className="info-page__content">
        {error && "Something went wrong :( Please try again"}
        {loading && "Loading"}
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
              <ListCard
                title="Episodes"
                listItems={Episodes}
                className="info-page__card"
              />
            )}
          </>
        )}
        <Button
          onClick={() => history.push("/home")}
          text="Back to choose"
          ariaLabel="Back"
          rounded={true}
        />
      </div>
    </div>
  );
};

export default InfoPage;
