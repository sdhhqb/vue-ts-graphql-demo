import gql from "graphql-tag";

// 获取电影信息
export const getMovieInfo = gql`
  query movieInfo {
    name
    rate
    director
    cast
    description
  }
`;

// 获取角色列表
export const getRoleList = gql`
  query roleList {
    allPeople {
      id
      name
      actor
    }
  }
`;

// 获取角色详情
export const getRoleDetail = gql`
  query roleDetail($id: ID) {
    person(id: $id) {
      id
      name
      actor
      classicLine
      related {
        id
        relation
        person {
          id
          name
        }
      }
    }
  }
`;
