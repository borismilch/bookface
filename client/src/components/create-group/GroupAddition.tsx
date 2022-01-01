import React from 'react'

import { GlobeIcon } from '@heroicons/react/outline'
import { EyeIcon, UserGroupIcon  } from '@heroicons/react/solid'

const GroupAddition = () => {
  return (
    <div className='flex flex-col bg-white w-full rounded-xl border border-gray-300  p-4 '>

      <h4 className='text-[#212121] text-lg font-semibold mb-3'>Information</h4>

      <div className='flex gap-2 items-center py-2'>

        <GlobeIcon className='h-6 w-6 text-gray-800' />

        <div className='flex flex-col '>

         <h5 className='text-[#212121] font-semibold leading-5'>Acesseble</h5>

         <span className='text-gray-600 text-xs'>Everyone can acess your database</span>

        </div>

      </div>

      <div className='flex gap-2 items-center py-2'>

        <EyeIcon className='h-6 w-6 text-gray-800' />

        <div className='flex flex-col '>

        <h5 className='text-[#212121] font-semibold leading-5'>Visible</h5>

        <span className='text-gray-600 text-xs'>Everyone can see your database</span>

        </div>

      </div>

      <div className='flex gap-2 items-center py-2'>

        <UserGroupIcon className='h-6 w-6 text-gray-800' />

        <div className='flex flex-col '>

        <h5 className='text-[#212121] font-semibold leading-5'>For all</h5>

       

        </div>

      </div>

     
      
      
    </div>
  )
}

export default GroupAddition
