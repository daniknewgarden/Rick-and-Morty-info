import { gql } from "@apollo/client";

const GET_CHARACTER_INFO = gql`
  query getCharacters($id: String) {
    character (id: $id) {
      name
      type
    }
  }
`;

export default GET_CHARACTER_INFO;
