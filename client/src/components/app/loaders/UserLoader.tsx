import React from 'react'

const UserLoader = () => {
  return (
    <div className='flex items-center gap-2 w-full px-2'>

      <div className='w-[35px] h-[35px] bg-gray-200 rounded-full animate-pulse ' />

      <div className='rounded-2xl bg-gray-200 animate-pulse h-5 w-[100px]' />
      
    </div>
  )
}

export default UserLoader
