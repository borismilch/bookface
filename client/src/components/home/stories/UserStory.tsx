import React from 'react'
import { IStory } from '../../../models/models'

const UserStory: React.FC<{story: IStory}> = ({story}) => {
  return (
    <div className='relative h-20 w-20 lg:h-56 lg:w-32 group cursor-pointer  overflow-x p-1 md:p-2 filter brightness-[65%] hover:brightness-95 transition-all duration-200 active:scale-95 '>

      <img
        className='absolute opacity-0 h-10 w-10 lg:opacity-100 rounded-full z-50 top-4 left-3'
        width={40}
        height={40}
        src={story.profile} alt="kkk" 
      />
      <img
        
       src={story.src} alt="" 
       className='rounded-[50%] w-full h-full object-cover lg:rounded-3xl'
      />

      <p className='text-xs group-hover:opacity-100 opacity-0 transition-all duration-100 font-semibold text-white absolute bottom-6 left-5 '>{story.name}</p>
      
    </div>
  )
}

export default UserStory
