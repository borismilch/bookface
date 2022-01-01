import React from 'react'

import { HomeOutlineIcon, HomeFilledIcon, GroupIconFilled, UserGroupOutline, PeopleFilledIcons, PeopleOutlineIcon } from '../../../../assets/icons'
import HeaderIcon from './HeaderIcon'

const DownNavigations = () => {
  return (
    <div className='flex md:hidden bg-white border-t border-gray-300 shadow-sm items-center justify-between w-full fixed bottom-0 left-0'>

      <HeaderIcon Icon={HomeOutlineIcon} SecondIcon={HomeFilledIcon} to='/' />

      <HeaderIcon Icon={UserGroupOutline} SecondIcon={GroupIconFilled} to='/friends' /> 

      <HeaderIcon Icon={PeopleOutlineIcon} SecondIcon={PeopleFilledIcons} to='/groups' />
       
   </div>
  )
}

export default DownNavigations
