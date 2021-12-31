import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { HomePage, FriendsPage, GroupPage, PhotoDetailPage, ChatEngine, UserPage } from './views'

 
const Routes = () => {
  return (
    <Switch>

      <Route exact path='/' >
        <HomePage />
      </Route>

      <Route exact path='/friends' >
        <FriendsPage />
      </Route>

      <Route exact path='/groups' >
        <GroupPage />
      </Route>

      <Route exact path='/photo/:id' >
        <PhotoDetailPage />
      </Route>

      <Route exact path='/friends/chats' >
        <ChatEngine />
      </Route>

      <Route exact path='/user/:id' >
        <UserPage />
      </Route>

    </Switch>
   
  )
}

export default Routes
