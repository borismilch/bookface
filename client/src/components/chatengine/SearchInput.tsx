import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

const SearchInput: React.FC<{placeholder: string}> = ({ placeholder }) => {
  return (
    <div className='flex items-center rounded-full w-full bg-gray-100 p-2 px-5'> 
      <SearchIcon className='h-5 w-5 ml flex-shrink-2 mx-2 rounded-full  text-gray-600' />
      <input type="text"  className='flex items-center  bg-transparent w-full focus:border-transparent outline-none ' placeholder={placeholder} />
    </div>
  )
}

export default SearchInput
