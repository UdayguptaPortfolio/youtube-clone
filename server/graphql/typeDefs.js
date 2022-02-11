const {gql}=require('apollo-server')
const typeDefs=gql`

type User{
    id:ID!
    email:String!
    token:String!
    createdAt:String!
    username:String!
}
input RegisterInput{
    username:String!
    password:String!
    confirmPassword:String!
    email:String!
}
type Query{
    hello:String
    getPosts:[User]
}
type Mutation{
    register(registerInput:RegisterInput):User!
    login(username: String!, password: String!): User!
}
`
module.exports=typeDefs;