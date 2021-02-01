import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
//GraphQL
import { MockedProvider } from "@apollo/client/testing";
import GET_CHARACTERS_QUERY from "../../GraphQL/getCharactersQuery";
//Tested component
import HomePage from "../Home";
//Routing
import { Router } from "react-router-dom";

const setCharacterId = (id: string): void => {
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
      query: GET_CHARACTERS_QUERY,
      variables: {
        name: "Adjudicator Rick",
      },
    },
    result: {
      data: {
        characters: {
          results: [{ name: "Adjudicator Rick", id: "8", status: "Dead" }],
        },
      },
    },
  },
];

describe("HomePage component", () => {
  it("Testing text content", () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomePage
          selectedCharacter={null}
          setCharacterId={setCharacterId}
          setLoadImage={setLoadImage}
          setLoadEpisode={setLoadEpisode}
        />
      </MockedProvider>
    );

    const titleElement = getByText(/search for characters/i);
    const subtitleElement = getByText(
      /search for all the characters from "rick and morty" and get information about them/i
    );

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  it("Testing default input state", () => {
    const { getByLabelText, getByPlaceholderText, getByDisplayValue } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomePage
          selectedCharacter={null}
          setCharacterId={setCharacterId}
          setLoadImage={setLoadImage}
          setLoadEpisode={setLoadEpisode}
        />
      </MockedProvider>
    );

    const ariaLabel = getByLabelText("Search character");
    const placeholder = getByPlaceholderText("Search");
    const defaultValue = getByDisplayValue("");

    expect(ariaLabel).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
    expect(defaultValue).toBeInTheDocument();
  });

  it("Check selected character state", () => {
    const { getByDisplayValue, getByLabelText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomePage
          selectedCharacter={"1"}
          setCharacterId={setCharacterId}
          setLoadImage={setLoadImage}
          setLoadEpisode={setLoadEpisode}
        />
      </MockedProvider>
    );

    const imageCheckbox = getByDisplayValue(/Load image/i);
    const episodeCheckbox = getByDisplayValue(/Load episodes/i);
    const submitButton = getByLabelText("Submit button");

    expect(imageCheckbox).toBeInTheDocument();
    expect(episodeCheckbox).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("Check routing", () => {
    const history = createMemoryHistory();

    const { getByLabelText } = render(
      <Router history={history}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <HomePage
            selectedCharacter={"1"}
            setCharacterId={setCharacterId}
            setLoadImage={setLoadImage}
            setLoadEpisode={setLoadEpisode}
          />
        </MockedProvider>
      </Router>
    );

    const submitButton = getByLabelText("Submit button");
    userEvent.click(submitButton);
  });
});
