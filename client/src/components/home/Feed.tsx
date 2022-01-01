import React from 'react'

import InputBox from './input/InputBox'

import GridPostList from '../../components/app/grid-page/GridPostsList'

const Feed = () => {
  return (
    <section className=' h-screen flex-grow pt-[20px]'>

      <div className='flex flex-col mx-auto w-full max-w-xl'>
        
        <InputBox />
        <GridPostList groupId='undefined' />
      </div>

    </section>
  )
}

export default Feed
