import React from 'react'

import Stories from './stories/Stories'
import InputBox from './input/InputBox'
import PostList from './posts/PostList'

const Feed = () => {
  return (
    <section className=' h-screen flex-grow pt-[20px]'>

      <div className='flex flex-col mx-auto w-full max-w-xl'>
        <Stories />
        <InputBox />
        <PostList />
      </div>

    </section>
  )
}

export default Feed
