import React from 'react'

import { GlobeIcon } from '@heroicons/react/solid'

import { useContext } from 'react'
import { CreateGroupContext } from '../../views/CreateGroup'

const GroupHeading = () => {

  const {title} = useContext(CreateGroupContext)

  return (
    <div className='flex gap-3 flex-col'>

      <input type="text" readOnly value={title} className='  font-bold py-3 text-3xl placeholder-gray-500 ' placeholder='Name of your group' />  

      <div className='flex items-center gap-2'>

        <GlobeIcon className='h-5 w-5 text-[#212121]' />

        <p className='text-[#212121]'>Общедоступная группа</p>

        <span className='font-semibold '>1 contributor</span>
        

      </div>

    </div>
  )
}

export default GroupHeading
