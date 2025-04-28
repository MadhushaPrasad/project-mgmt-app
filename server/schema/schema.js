const { clients, projects} = require('../sampleData');

const {GraphQLObjectType} = require('graphql');

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
