import React from 'react'
import GroupLoader from './GroupLoader'

const GroupYieldLoader = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  w-full p-7 mt-10'>

      <GroupLoader />
      <GroupLoader />
      <GroupLoader />
      <GroupLoader />
      <GroupLoader />
      
    </div>
  )
}

export default GroupYieldLoader
