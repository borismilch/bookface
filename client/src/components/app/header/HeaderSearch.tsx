import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

const HeaderSearch = () => {
  return (
    <div className='flex gap-2 items-center p-2 pr-3'>
        
        <div className='flex items-center rounded-full   bg-gray-100 p-2 px-5'> 
          <SearchIcon className='h-4 w-4 ml flex-shrink-2 rounded-full  text-gray-600' />
          <input type="text"  className='md:flex ml-2 hidden items-center bg-transparent focus:border-transparent outline-none ' placeholder='search Facebook' />
        </div>

      </div>
  )
}

export default HeaderSearch
