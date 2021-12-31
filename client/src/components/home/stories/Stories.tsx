import React from 'react'
import { IStory } from '../../../models/models'
import UserStory from './UserStory'


const stories:  IStory[] = [
  {
    name: 'Sonny Sangha',
    src: 'https://links.papareact.com/zof',
    profile: 'https://links.papareact.com/l4v'
  },

  {
    name: 'Elon Mask',
    src: 'https://links.papareact.com/4zn',
    profile: 'https://links.papareact.com/kxk'
  },
  {
    name: 'Jeff Bezoz',
    src: 'https://links.papareact.com/k2j',
    profile: 'https://links.papareact.com/f0p'
  },
  {
    name: 'Mark Zucerberg',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf'
  },
  {
    name: 'Bill Gates',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/zvy'
  },
]

const Stories = () => {
  return (
    <div className='overflow-x-auto max-w-full flex '>

      {stories.map(story => (
        <UserStory 
          key={story.src}
          story={story}
        />
      ))}
      
    </div>
  )
}

export default Stories
