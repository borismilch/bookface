import React from 'react'
import { useHistory } from 'react-router-dom'

import { UserIcon, BellIcon, LogoutIcon } from '@heroicons/react/solid'
import { useAuth0 } from '@auth0/auth0-react'


const HeaderSelect: React.FC<{changeMenuBar: (val: boolean) => void}> = ({changeMenuBar}) => {

  const history = useHistory()
  const { logout } = useAuth0()

  return (
    <div
     onClick={() => changeMenuBar(false)}
     className='flex flex-col top-6 -left-20   overflow-hidden absolute w-[130px] rounded-2xl shadow-lg border-gray-200 border'>

      <div className='side_select_item' onClick={() => history.push('profile')}>

        <UserIcon className='h-5 w-5' />
        <span className='font-semibold text-xs text-[#212121]'>Account</span>

      </div>

      <div className='side_select_item' onClick={() => history.push('create-group')}>

        <BellIcon className='h-5 w-5' />
        <span className='font-semibold text-xs text-[#212121]'>Group</span>

      </div>

      <div className='side_select_item'>

        <LogoutIcon className='h-5 w-5' onClick={() => logout()} />
        <span className='font-semibold  text-xs text-[#212121]'>Logout</span>

      </div>


      
    </div>
  )
}

export default HeaderSelect
