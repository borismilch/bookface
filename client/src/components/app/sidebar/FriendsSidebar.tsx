import React from 'react'

import { CogIcon } from '@heroicons/react/solid'

import { ISidebarRow } from '../../../models/models'
import sidebarData from '../../../utils/HeadrItems'
import FriendsSidebarItem from './FriendsSidebarItem'

const FriendsSidebar = () => {
  
  return (
    <>
     <div className='w-[360px]' />
    
      <div className='flex-col fixed top-12 h-screen left-0 p-3 max-w-[340px] bg-white w-full hidden lg:flex border-r border-gray-300 shadow-md'>

      <div className='flex flex-col '>

        <div className='flex items-center justify-between py-3'>

          <h1 className='text-3xl text-[#212121]'>Friends</h1>

          <div className='cursor-pointer transition-all duration-200 p-2 hover:bg-gray-200  rounded-full'>

            <CogIcon className='h-7 w-7' />

          </div>

        </div>
        
        

        <div className='flex flex-col'>

          {
            sidebarData.map((item: ISidebarRow) => (
              <FriendsSidebarItem key={item.text} sidebarItem={item} />
            ))
          }

        </div>

      </div>

    </div>
    </>
  )
}

export default FriendsSidebar
