import React from 'react'

import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_GROUPS } from '../../../graphql/queries'

import { IGroup } from '../../../models/models'

import Groupcard from './Groupcard'
import GroupYieldLoader from '../../app/loaders/GroupYieldLoader'

const GoopGrid = () => {

  const [groups, setGroups] = useState<IGroup[]>([] as IGroup[]) 
  const { data, loading } = useQuery(GET_GROUPS)

  useEffect(() => {
    if (data) {

      setGroups(data.getGroups)

    }
  }, [data])


  if (loading) { return ( <GroupYieldLoader /> ) }

  return (
    <div className='flex flex-col max-w-[1100px] relative py-6 px-[14px] w-full mx-auto '>

      <h2 className='text-xl text-[#212121] mt-10 md:mt-0 font-bold'>Рекомендации для вас</h2>

      <span className=' text-gray-600 '>Группы, которые могут вам понравиться</span>

      <div className='w-full mt-6 gap-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>

        {
          groups.map(group => (
            <Groupcard group={group} />
          ))
        }

      </div>
      
    </div>
  )
}

export default GoopGrid
