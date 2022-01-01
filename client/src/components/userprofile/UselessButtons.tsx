import { SearchIcon, SparklesIcon } from '@heroicons/react/outline'
import React from 'react'

const UselessButtons = () => {
  return (
    <div className='flex gap-4 flex-col  sm:flex-row '>

    <button 
      className='blue-btn'>

      <SparklesIcon className='text-white h-5 w-5' />

      <p className='text-white font-semibold text-sm'>Добавить историю</p>

    </button>
        
    <button className='gray-btn'>

    <SearchIcon className='h-5 w-5' />

      <p className='text-[#212121] font-semibold text-sm'>Search in Portfolio</p>

    </button>

  </div>
  )
}

export default UselessButtons
