import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/outline'

import { useHistory } from 'react-router-dom'

const ChatsidebarHeader: React.FC<{title: string}> = ({children, title}) => {

  const history = useHistory()

  const backHistory = () => {
    history.go(-1)
  }

  return (
    <div className='flex flex-col gap-3 w-full mr-4 pb-4 border-b border-gray-300'>

      <div className='flex items-center gap-3'>

        <div onClick={backHistory.bind(null)} className='p-2 rounded-full active:scale-90 cursor-pointer transition-all duration-200 hover:bg-gray-200'>
          <ArrowLeftIcon className='h-6 w-6' />
        </div>
     
        <div className='flex flex-col'>

          <p className='font-light text-xs text-gray-[#212121]'>Друзья</p>

          <h2 className='text-[#212121] text-2xl font-bold '>{title}</h2>


        </div>
      </div>

       {children}
      
    </div>
  )
}

export default ChatsidebarHeader
