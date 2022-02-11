const userResolvers=require('./users');
const User=require('../../models/userModel')
module.exports={
    Query:{
        hello:()=>{
            return 'Hello World';
        },
        getPosts:async()=>{
            return await User.find()
            
        }
    },
    Mutation:{
        ...userResolvers.Mutation,
    }
}