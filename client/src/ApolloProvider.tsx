import React from 'react'
import App from './App'

import { ApolloProvider } from '@apollo/react-hooks'

import typeDefs from './graphql/typeDefs'

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  link: httpLink,
  typeDefs: typeDefs,
  cache: new InMemoryCache()
})
 
export default  () => {
  return (
    <ApolloProvider client={client}>
      <App />
   </ApolloProvider>
  )
}

