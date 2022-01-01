import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'
import { Header } from '../components/app'

import PostList from '../components/home/posts/PostList'
import InputBox from '../components/home/input/InputBox'

import GroupAddition from '../components/create-group/GroupAddition'
import GridGallery from '../components/app/grid-page/GridGallery'

import { useQuery } from '@apollo/react-hooks'
import { GET_GROUP } from '../graphql/queries'
import { IGroup } from '../models/models'

import GridPostsList from '../components/app/grid-page/GridPostsList'

import GridPageBanner from '../components/app/grid-page/GridPageBanner'

const GropPage = () => {

  const [current, setCurrent] = useState<IGroup>({} as IGroup)

  const location = useLocation<{groupId: string}>()
  const { groupId } = location.state

  const { data } = useQuery(GET_GROUP, { variables: { id: groupId } })

  useEffect(() => {
    
    if (data) {
      setCurrent(data.getGroup)
    }

  }, [data])

  if (!current.bgPicture) { return ( <p>Loading...</p> ) }

  return (
    <div className='flex flex-col min-h-screen w-full'>
      <Header />

      <div className='flex'>

       <div className='w-[1050px] mx-auto'>

        <GridPageBanner group={current} />

        <div className='flex'>

          <div className='flex flex-col flex-[0.60]'>
            <InputBox groupId={groupId} />
            <GridPostsList groupId={groupId} />
          </div>

          <div className='flex flex-col mt-8 ml-4 flex-[0.40]'>

            <GroupAddition />
            <GridGallery groupId={groupId} />

          </div>

        </div>

       </div>

      </div>

    </div>
  )
}

export default GropPage
