import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { Auth0Provider } from '@auth0/auth0-react'

import ApolloProvider from './ApolloProvider'

ReactDOM.render(
  <React.StrictMode>

    <Auth0Provider
      domain='dev-ly2qm2-a.us.auth0.com'
      clientId='JbCnnNlpbtSmfMqOpWWuMk5q9DSH0b4a'
      redirectUri={window.location.origin}
    >
     <ApolloProvider />
    
    </Auth0Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);
