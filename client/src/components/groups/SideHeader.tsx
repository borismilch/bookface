import { CogIcon } from '@heroicons/react/outline'
import React from 'react'
import SearchInput from '../chatengine/SearchInput'

const SideHeader = () => {
  return (
    <>

    <div className='flex flex-col w-full '>

      <div className='flex items-center justify-between'>

        <h1 className='text-2xl font-bold text-[#212121] pb-3'>Groups</h1>

        <div className='cursor-pointer transition-all duration-200 p-2 pt-0 hover:bg-gray-200  rounded-full'>

          <CogIcon className='h-7 w-7' />

        </div>

      </div>

      <SearchInput placeholder='Search for groups'/>
    </div>
     

     </>
    )
}

export default SideHeader
