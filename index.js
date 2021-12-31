const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const env = require('dotenv')

const { ApolloServer, PubSub } = require('apollo-server')

const typeDefs = require('./graphql/typesDefinitions')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req })
})

env.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const PORT = process.env.SERVER_PORT - 1000 || 5001

const start = async () => {
  try {

    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    server.listen({port: PORT})
      .then(() => console.log('server started on port '+ PORT))

  } catch (e) {
    console.log(e)
  }
}

start()