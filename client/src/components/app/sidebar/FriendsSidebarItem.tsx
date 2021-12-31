import React from 'react'

import { Link } from 'react-router-dom'
import { ISidebarRow } from '../../../models/models'

const FriendsSidebarItem: React.FC<{sidebarItem: ISidebarRow}> = ({ sidebarItem }) => {
  return (
    <Link to={sidebarItem.to} className='friend_sidebat_item p-3 py-2 ' >

      <sidebarItem.icon className='h-10 w-10 p-2 rounded-full bg-gray-200' />
      
      <p className='text-[#212121] font-semibold'>{sidebarItem.text}</p>
      
    </Link>
  )
}

export default FriendsSidebarItem
