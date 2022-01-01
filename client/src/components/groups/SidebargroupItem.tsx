import React from 'react'

import { IGroup } from '../../models/models'
import { useHistory } from 'react-router-dom'

const SidebargroupItem: React.FC<{group: IGroup}> = ({group}) => {

  const history = useHistory()

  const pushHIstory = () => {
    history.push({
      pathname: '/group/' + group._id,
      state: { groupId: group._id }
    })
  }
  
  return (
    <div onClick={pushHIstory.bind(null)} className='flex items-center rounded-xl my-1 hover:bg-gray-200 transition-all duration-200 cursor-pointer overflow-hidden w-full gap-2 '>

      <div className='relative w-[60px] h-[60px]'>

        <img src={group.picture} className='w-full h-full rounded-xl object-cover' alt="d" />

       </div> 

      <div className='flex flex-col'>

        <h1 className='font-semibold text-sm leading-7'>{group.title}</h1>

        <span className='text-xs font-semibold text-gray-500'>Subscribed: {group.customers.length + ''}</span>

      </div>

    </div>
  )
}

export default SidebargroupItem
