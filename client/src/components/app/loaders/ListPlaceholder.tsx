import React from 'react'

const ListPlaceholder: React.FC<{title: string}> = ({title}) => {
  return (
    <div className='flex mt-6 flex-col flex-grow'>

    <div className='p-4 bg-white shadow-md rounded-xl pb-7'>
      
      <h1 className='text-xl font-bold text-[#212121] '>{title}</h1>

    </div>

  </div>
  )
}

export default ListPlaceholder
