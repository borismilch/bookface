import React from 'react'

const FriendsHeading: React.FC<{title: string}> = ({title}) => {
  return (
    <div className='mt-2 py-4 '>

      <h1 className='text-xl font-bold'>{title}</h1>
      
    </div>
  )
}

export default FriendsHeading
