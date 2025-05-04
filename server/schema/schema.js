const { clients, projects} = require('../sampleData');

const {GraphQLObjectType, GraphQLList} = require('graphql');


const Client = require('./../models/Client')
const Project = require('./../models/Project')


const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    phone: {type: GraphQLString},
  }),
});


const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: {type: GraphQLString},
    clientId: {type: GraphQLString},
    name: {type: GraphQLString},
    description: {type: GraphQLString},
    status: {type: GraphQLString},
  }),
})

const RootQuery = new GraphQLObjectType({
  name:"RootQueryType",
  fields:{
    projects:{
      type: new GraphQLList(ProjectType),
      resolve(parent,args){
        return Project.find()
      }
    }
  }
})
