const { buildSchema } = require('graphql');
const { resolver } = require('./resolver');

const schema = buildSchema(
  `
  type Query {
    "电影名称"
    name: String
    
    "描述"
    description: String
    
    "导演"
    director: String
    
    "评分"
    rate: Float
    
    "主演"
    cast: String
    
    "角色列表"
    allPeople: [Person]
    
    "角色详情"
    person(id: ID): Person
  }
  
  "人物对象"
  type Person {
    id: ID!
    "人物名称"
    name: String
    "扮演者"
    actor: String
    "经典台词"
    classicLine: String
    "关联关系"
    related: [Relation]
  }
  
  "关联关系对象"
  type Relation {
    id: ID
    "人物关系"
    relation: String
    "关联人物详情"
    person: Person
  }
`
)

module.exports = {
  schema,
  root: resolver
}
