import React from 'react'
import HeaderIcon from './HeaderIcon'

import { HomeOutlineIcon, HomeFilledIcon, GroupIconFilled, UserGroupOutline, PeopleFilledIcons, PeopleOutlineIcon } from '../../../../assets/icons'

const TopNavigation: React.FC<{transparent: boolean}> = ({transparent}) => {
  return (
    <div className='flex justify-center items-center flex-grow '>

    { !transparent && <div className='items-center md:flex hidden  justify-between w-full max-w-[330px]'>

      <HeaderIcon Icon={HomeOutlineIcon} SecondIcon={HomeFilledIcon} to='/' />

      <HeaderIcon Icon={UserGroupOutline} SecondIcon={GroupIconFilled} to='/friends' /> 
  
      <HeaderIcon Icon={PeopleOutlineIcon} SecondIcon={PeopleFilledIcons} to='/groups' />
         
     </div>}

    </div>
  )
}

export default TopNavigation
