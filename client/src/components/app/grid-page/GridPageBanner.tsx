
import React, { useEffect, useState } from 'react'

import { IGroup } from '../../../models/models'

import GribPageBannerBackground from './GribPageBannerBackground'

import ProfileSelect from '../../userDetail/profile/ProfileSelect'

import { UserRemoveIcon, UserAddIcon } from '@heroicons/react/solid'

import { GlobeIcon } from '@heroicons/react/solid'
import { useMutation } from '@apollo/react-hooks'
import { SUBSCRIBE_ON_GROUP, GET_GROUPS, GET_GROUP } from '../../../graphql/queries/groups'
import currentUser from '../../../store/currentUser'
import { SearchIcon } from '@heroicons/react/outline'

const GridPageBanner: React.FC<{group: IGroup}> = ({group}) => {

  const [subscribe] = useMutation(SUBSCRIBE_ON_GROUP)
  const [sub, setSub] = useState<boolean>(false)

  const subscribeOnGroup = () => {
    setSub(prev => !prev)
    subscribe({variables: { email: currentUser.email, id: group._id }, refetchQueries: [GET_GROUPS, GET_GROUP]})
  }

  useEffect(() => {

    setSub(group.customers.includes(currentUser.email))
  }, [])

  return (
    <div className='flex flex-col w-full border-b shadow-lg bg-white  border-gray-300 '>

    <GribPageBannerBackground group={group} />

    <div className='flex items-center relative border-b py-8 border-gray-300 w-full px-4'>

      <div className='flex flex-col md:flex-row  items-center  flex-grow gap-4'>

        <div className='flex flex-col flex-grow px-5  gap-2'>

        <h1 className='text-3xl flex-grow font-bold text-[#212121]'>{group.title}</h1>
          
          <div className='flex gap-2 items-center'>

            <GlobeIcon className='h-5 w-5 text-gray-600' />

            <h3 className='text-[#212121] font-semibold'>
              Видима для всіх
            </h3>

            <span className='mx-1 text-gray-800 font-bold'>·</span>

            <h3 className='text-gray-700 font-semibold'>
                Subscribed: {group.customers.length}
            </h3>


          </div>

      
        </div>

      { !sub ?  <button 
          onClick={subscribeOnGroup.bind(null)}
          className='blue-btn'>

          <UserRemoveIcon  className='text-white h-5 w-5' />

          <p className='text-white font-semibold text-sm'>Join Group</p>

        </button>
        : 

        <button 
        onClick={subscribeOnGroup.bind(null)}
          className='blue-btn bg-red-500 hover:bg-red-600 text-white'>

          <UserAddIcon className='text-white h-5 w-5' />

          <p className='text-white font-semibold text-sm'>Leave Group </p>

        </button>

      }
  
        <button className='gray-btn'>

        <SearchIcon className='h-5 w-5' />

          <p className='text-[#212121] font-semibold text-sm'>Search in Portfolio</p>

        </button>

      </div>

    </div>

    <ProfileSelect />    


  </div>
  )
}

export default GridPageBanner
