import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
//GraphQL
import { MockedProvider } from "@apollo/client/testing";
import GET_CHARACTER_INFO_QUERY from "../../GraphQL/getCharacterInfoQuery";
//Tested component
import InfoPage from "../Info";

const setCharacterId = (id: null): void => {
  console.log(id);
};

const setLoadImage = (value: boolean) => {
  console.log(value);
};

const setLoadEpisode = (value: boolean) => {
  console.log(value);
};

const mocks = [
  {
    request: {
      query: GET_CHARACTER_INFO_QUERY,
      variables: {
        id: "8",
        image: true,
        episode: true,
      },
    },
    result: {
      data: {
        character: {
          name: "Adjudicator Rick",
          status: "Dead",
          species: "Human",
          gender: "Male",
          created: "2017-11-04T20:03:34.737Z",
          image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
          episode: {
            name: "The Ricklantis Mixup",
            air_date: "September 10, 2017",
          },
        },
      },
    },
  },
];

describe("InfoPage component", () => {
  it("Testing loading state", () => {
    const { getByText, getByLabelText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <InfoPage
          id="8"
          loadEpisode={true}
          loadImage={true}
          setCharacterId={setCharacterId}
          setLoadImage={setLoadImage}
          setLoadEpisode={setLoadEpisode}
        />
      </MockedProvider>
    );

    const loadingTitle = getByText(/loading/i);
    const backButton = getByLabelText(/back/i);

    expect(loadingTitle).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
  });

  it("Testing success fetch data state", async () => {
    let loadImage: boolean = false;
    let loadEpisodes: boolean = false;

    const mocks = {
      request: {
        query: GET_CHARACTER_INFO_QUERY,
        variables: {
          id: "8",
          image: loadImage,
          episode: loadEpisodes,
        },
      },
      result: {
        data: {
          character: {
            name: "Adjudicator Rick",
            status: "Dead",
            species: "Human",
            gender: "Male",
            created: "2017-11-04T20:03:34.737Z",
            image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
            episode: [
              {
                name: "The Ricklantis Mixup",
                air_date: "September 10, 2017",
              },
            ],
          },
        },
      },
    };

    const { getByText } = render(
      <MockedProvider mocks={[mocks]}>
        <InfoPage
          id="8"
          loadEpisode={loadEpisodes}
          loadImage={loadImage}
          setCharacterId={setCharacterId}
          setLoadImage={setLoadImage}
          setLoadEpisode={setLoadEpisode}
        />
      </MockedProvider>
    );

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    const characterName = getByText(/Adjudicator Rick/i);
    const characterStatus = getByText(/male/i);
    const characterSpecies = getByText(/Human/i);
    const characterGender = getByText(/Male/i);

    expect(characterName).toBeInTheDocument();
    expect(characterStatus).toBeInTheDocument();
    expect(characterSpecies).toBeInTheDocument();
    expect(characterGender).toBeInTheDocument();
  });

  it("Testing avatar, when data fetch success", async () => {
    let loadImage: boolean = true;
    let loadEpisodes: boolean = false;

    const mocks = {
      request: {
        query: GET_CHARACTER_INFO_QUERY,
        variables: {
          id: "8",
          image: loadImage,
          episode: loadEpisodes,
        },
      },
      result: {
        data: {
          character: {
            name: "Adjudicator Rick",
            status: "Dead",
            species: "Human",
            gender: "Male",
            created: "2017-11-04T20:03:34.737Z",
            image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
            episode: [
              {
                name: "The Ricklantis Mixup",
                air_date: "September 10, 2017",
              },
            ],
          },
        },
      },
    };

    const { getByAltText } = render(
      <MockedProvider mocks={[mocks]}>
        <InfoPage
          id="8"
          loadEpisode={loadEpisodes}
          loadImage={loadImage}
          setCharacterId={setCharacterId}
          setLoadImage={setLoadImage}
          setLoadEpisode={setLoadEpisode}
        />
      </MockedProvider>
    );

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    const characterAvatar = getByAltText(/Adjudicator Rick avatar/i);

    expect(characterAvatar).toBeInTheDocument();
  });

  it("Testing episodes, when data fetch success", async () => {
    let loadImage: boolean = false;
    let loadEpisodes: boolean = true;

    const mocks = {
      request: {
        query: GET_CHARACTER_INFO_QUERY,
        variables: {
          id: "8",
          image: loadImage,
          episode: loadEpisodes,
        },
      },
      result: {
        data: {
          character: {
            name: "Adjudicator Rick",
            status: "Dead",
            species: "Human",
            gender: "Male",
            created: "2017-11-04T20:03:34.737Z",
            image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
            episode: [
              {
                name: "The Ricklantis Mixup",
                air_date: "September 10, 2017",
              },
            ],
          },
        },
      },
    };

    const { getByText } = render(
      <MockedProvider mocks={[mocks]}>
        <InfoPage
          id="8"
          loadEpisode={loadEpisodes}
          loadImage={loadImage}
          setCharacterId={setCharacterId}
          setLoadImage={setLoadImage}
          setLoadEpisode={setLoadEpisode}
        />
      </MockedProvider>
    );

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    const episodesTitle = getByText(/Episodes/i);
    const episodesItem = getByText(/The Ricklantis Mixup/i);

    expect(episodesTitle).toBeInTheDocument();
    expect(episodesItem).toBeInTheDocument();
  });

  it("Testing error state", async () => {
    let loadImage: boolean = false;
    let loadEpisodes: boolean = false;

    const mocks = {
      request: {
        query: GET_CHARACTER_INFO_QUERY,
        variables: {
          id: "8",
          image: loadImage,
          episode: loadEpisodes,
        },
      },
      error: new Error("An error occurred"),
    };

    const { getByText, getByLabelText } = render(
      <MockedProvider mocks={[mocks]}>
        <InfoPage
          id="8"
          loadEpisode={loadEpisodes}
          loadImage={loadImage}
          setCharacterId={setCharacterId}
          setLoadImage={setLoadImage}
          setLoadEpisode={setLoadEpisode}
        />
      </MockedProvider>
    );

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    const errorMessage = getByText("Something went wrong :( Please try again");
    const backButton = getByLabelText(/back/i);

    expect(errorMessage).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
  });
});
