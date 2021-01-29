import { gql } from "@apollo/client";

const GET_CHARACTERS_QUERY = gql`
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

export default GET_CHARACTERS_QUERY;
