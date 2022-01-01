import React from 'react'

import FriendsSidebarItem from '../app/sidebar/FriendsSidebarItem'

import { PlusSmIcon } from '@heroicons/react/outline'

import sidebarItems from '../../utils/SidebarItems'
import { useHistory } from 'react-router-dom'

import CreatedGroupSidebar from './CreatedGroupSidebar'

const CroupsSideabrContent = () => {

  const history = useHistory()


  const pushHistory = () => {
    history.push('/create-group')
  }



  return (
    <div className='flex flex-col w-full'>

      <div className='w-full py-4 flex flex-col pb-2 border-b border-gray-300'>

      {
        sidebarItems.map(row => (
          <FriendsSidebarItem sidebarItem={row} />
        ))
      }

      <button onClick={pushHistory.bind(null)} className='create_group_button'>

        <PlusSmIcon  className='w-4 h-4 '/>

        <p className='text-sm font-semibold text-blue-500'>Create New Group</p>

      </button>

      </div>

      <CreatedGroupSidebar />

    </div>
 
  )
}

export default CroupsSideabrContent
