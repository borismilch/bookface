import React from 'react'

import { Link } from 'react-router-dom'

const SidebarRow: React.FC<{Icon?: Function, src?: string, title: string, to: string}> = ({Icon, src, title, to}) => {
  return (
    <Link to={to} className='flex items-center space-x-2 p-3 hover:bg-gray-200 rounded-xl px-4 cursor-pointer'>

      <div className='w-[38px]'>
        
      { src && 
        <img 
          src={src} 
          
          alt="ddd" 
          className='rounded-full avatar' 
         
        />
      }
      { Icon &&  <Icon className='text-blue-500 h-7 w-7' />  }

      </div>
      

      <p className='hidden mb-1 md:inline-flex font-semibold text-sm'>{title}</p>
    </Link>
  )
}

export default SidebarRow
