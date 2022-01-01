import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_USERS_GROUPS } from '../../graphql/queries'

import { useState, useEffect } from 'react'
import { IGroup } from '../../models/models'

import SidebargroupItem from './SidebargroupItem'

import currentUser from '../../store/currentUser'

const CreatedGroupSidebar = () => {

  const [groups, setGroups] = useState<IGroup[]>([] as IGroup[])
  const {data} = useQuery(GET_USERS_GROUPS, {variables: { email: currentUser.email }})

  useEffect(() => {
    if (data) {
      setGroups(data.getGroupsByEmail)
      console.log(data)
    }
  }, [data])

  if (!data) { return ( <p>Loading...</p> ) }


  return (
    <div className='flex flex-col '>

      <h3 className='text-[#212121] font-semibold py-3 text-lg'>Группы, которыми вы управляете:</h3>

      <div className='flex flex-col'>

        {
          groups.map(group => (
            <SidebargroupItem group={group} />
          ))
        }

      </div>
      
    </div>
  )
}

export default CreatedGroupSidebar
