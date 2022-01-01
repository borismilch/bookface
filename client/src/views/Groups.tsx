import React from 'react'

import { Header } from '../components/app'
import ChatSidebar from '../components/chatengine/ChatSidebar'
import SideHeader from '../components/groups/SideHeader'

import GroupsSidebarCotent from '../components/groups/GroupsSidebarCotent'

import GoopGrid from '../components/groups/grid/GoopGrid'

const Groups = () => {

  return (
    <div className='flex flex-col h-screen'>
      <Header />

      <main className='flex flex-grow pb-10'>

      <ChatSidebar >
        <SideHeader />

         <GroupsSidebarCotent />
       </ChatSidebar>

       <GoopGrid />

      </main>

    </div>
  )
}

export default Groups
