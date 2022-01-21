const { ApolloServer } = require("apollo-server");
const userSchema = require("./user/schema/user.graphql")
const userResolvers = require("./user/resolvers/userResolver")

const typeDefs = [userSchema]
const resolvers = [userResolvers]


const server = new ApolloServer({typeDefs, resolvers});

//para selecionar a porta basta trocar a parte ({url}) por listen:({port:3001}) porta desejada
server.listen().then(({url}) => {
    console.log(`Servidor rodando na porta ${url}`) 
})