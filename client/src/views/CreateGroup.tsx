import React, { ChangeEvent, useEffect } from 'react'
import { Header } from '../components/app'
import ChatSidebar from '../components/chatengine/ChatSidebar'
import ChatsidebarHeader from '../components/chatengine/ChatsidebarHeader'

import GroupVew from '../components/create-group/GroupVew'

import { useHistory } from 'react-router-dom'

import { ICreateGroupContextProps, IGroup } from '../models/models'
import { useMutation } from '@apollo/react-hooks'

import { CREATE_GROUP, GET_GROUPS, GET_USERS_GROUPS } from '../graphql/queries'
import currentUser from '../store/currentUser'

import { createContext } from 'react'

import FormSidebar from '../components/create-group/FormSidebar'

export const CreateGroupContext = createContext<ICreateGroupContextProps>({} as ICreateGroupContextProps)

import { useState } from 'react'
import { observer } from 'mobx-react-lite'

const CreateGroup = () => {

  const history = useHistory()

  const [addGroup, { data }] = useMutation(CREATE_GROUP)

  const [title, setTitle] = useState<string>('')

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const createGroup = () => {

    const newGroup: IGroup = {
      title,
      picture: 'https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png',
      bgPicture: 'https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png',
      creatorId: currentUser.email,
      customers: [currentUser.email],
      postsIds: [] 
    }

    addGroup({ variables: { payload: newGroup }, refetchQueries: [GET_GROUPS, GET_USERS_GROUPS] })

  }

  useEffect(() => {
    if (data) {
      console.log(data)
      history.push({
        pathname: '/group/' + data.createGroup._id,
        state: {
          id: data.createGroup._id
        }
      })
    }
  }, [data])

  return (
    <CreateGroupContext.Provider value={{title, changeHandler, createGroup}}>
    <div className='flex flex-col h-screen w-full'>

      <Header />

      <div className='flex '>

     <ChatSidebar >
       <ChatsidebarHeader title='Cteate a group' /> 
         <FormSidebar />
       </ChatSidebar>
    
     <div className=''>
       <GroupVew />
     </div>

      </div>

      
    </div>
    </CreateGroupContext.Provider>
  )
}

export default observer(CreateGroup)
