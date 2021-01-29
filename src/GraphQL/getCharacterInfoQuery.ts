import { gql } from "@apollo/client";

const GET_CHARACTER_INFO_QUERY = gql`
  query getCharacterInfo($id: ID!, $image: Boolean!, $episode: Boolean!) {
    character(id: $id) {
      name
      status
      species
      gender
      created
      image @include(if: $image)
      episode @include(if: $episode) {
        name
        air_date
      }
    }
  }
`;

export default GET_CHARACTER_INFO_QUERY;
