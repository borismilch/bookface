import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { useAuth0 } from '@auth0/auth0-react'
import { HomePage, FriendsPage, GroupPage, CreateGroup, PhotoDetailPage, ChatEngine, UserPage, ProfilePage, Group } from './views'
 
const Routes = () => {

  const {isAuthenticated} = useAuth0()
 

  return (
    <Switch>

      <Route exact path='/' >
        <HomePage />
      </Route>

      { !isAuthenticated && <Redirect to='/' />  }

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

      <Route exact path='/profile' >
        <ProfilePage />
      </Route>

      <Route exact path='/create-group' >
        <CreateGroup />
      </Route>

      <Route exact path='/group/:id' >
        <Group />
      </Route>

    </Switch>
   
  )
}

export default Routes
