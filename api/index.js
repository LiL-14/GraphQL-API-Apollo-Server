const { ApolloServer } = require("apollo-server");

const users = [
    {
        nome: "Ana",
        ativo: true,
    },
    {
        nome: "Marcia",
        ativo: false
    }
]

const server = new ApolloServer({typeDefs, resolvers});