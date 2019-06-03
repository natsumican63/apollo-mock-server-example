const { ApolloServer, gql } = require('apollo-server')
const fs = require('fs')

// dumpしたschemeの読み込み
const typeDefs = gql(fs.readFileSync('./typeDefs.graphql', 'utf8'))

// モックデータをカスタマイズしたい場合は下記を参照
// https://www.apollographql.com/docs/apollo-server/features/mocking/#customizing-mocks
const server = new ApolloServer({ typeDefs, mocks: true })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
