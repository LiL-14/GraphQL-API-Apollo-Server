const { ApolloServer } = require("apollo-server");
const userSchema = require("./user/schema/user.graphql")
const userResolvers = require("./user/resolvers/userResolver");
const UsersAPI = require("./user/datasource/user");

const typeDefs = [userSchema]
const resolvers = [userResolvers]


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            usersAPI: new UsersAPI()
        }
    }
});

//para selecionar a porta basta trocar a parte ({url}) por listen:({port:3001}) porta desejada
server.listen().then(({url}) => {
    console.log(`Servidor rodando na porta ${url}`) 
})

//schema é onde se define o que pode ser feito no servidor graphQL
// o resolver é onde implementamos o schema