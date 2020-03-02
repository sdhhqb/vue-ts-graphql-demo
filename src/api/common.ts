import gql from "graphql-tag";

export const getMovieInfo = gql`
  query movieInfo {
    name
    rate
    director
    cast
    description
  }
`;
