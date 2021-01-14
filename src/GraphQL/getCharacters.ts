import { gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query getCharacters($name: String) {
    characters(filter: { name: $name }) {
      results {
        name
        id
        status
      }
    }
  }
`;

export default GET_CHARACTERS;
