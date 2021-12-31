import React from 'react'
import ChatSidebar from '../components/chatengine/ChatSidebar'
import { Header } from '../components/app'
import ChatsidebarHeader from '../components/chatengine/ChatsidebarHeader'
import SearchInput from '../components/chatengine/SearchInput'
import ChatSidebarLit from '../components/chatengine/ChatSidebarLit'

const ChatEngine = () => {
  return (
    <>
      <Header />
    <div className='flex gap-4 min-h-screen w-full'>

      <ChatSidebar >
       <ChatsidebarHeader title='Все друзья' >
            <SearchInput placeholder='Search for friends' />
          </ChatsidebarHeader> 

          <ChatSidebarLit />
      </ChatSidebar>

      <p>Chat</p>

      
    </div>
    </>
  )
}

export default ChatEngine
