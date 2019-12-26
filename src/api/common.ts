import gql from "graphql-tag";

export const getShopInfo = gql`
  query shopInfo {
    shop {
      name
    }
  }
`;

export const getShopLocation = gql`
  query shopLocation($province: String!, $city: String!) {
    shop {
      name
    }

    storeLocations(province: $province, city: $city) {
      storeName
    }
  }
`;
