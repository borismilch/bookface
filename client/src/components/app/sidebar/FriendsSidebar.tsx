import React from 'react'

import { CogIcon } from '@heroicons/react/solid'

import { ISidebarRow } from '../../../models/models'
import sidebarData from '../../../utils/HeadrItems'
import FriendsSidebarItem from './FriendsSidebarItem'

import SearchInput from '../../chatengine/SearchInput'
import SidebarContainer from '../containers/SidebarContainer'

const FriendsSidebar = () => {
  
  return (
    <SidebarContainer>
    
      <div className='flex flex-col '>

        <div className='flex items-center justify-between py-3'>

          <h1 className='text-3xl text-[#212121]'>Friends</h1>

          <div className='cursor-pointer transition-all duration-200 p-2 hover:bg-gray-200  rounded-full'>

            <CogIcon className='h-7 w-7' />

          </div>

        </div>

        <SearchInput placeholder='Search for friends'/>
        
        

        <div className='flex flex-col'>

          {
            sidebarData.map((item: ISidebarRow) => (
              <FriendsSidebarItem key={item.text} sidebarItem={item} />
            ))
          }

        </div>

      </div>

    </SidebarContainer>
  )
}

export default FriendsSidebar
