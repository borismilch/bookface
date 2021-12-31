import React from 'react'

import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'

import Contact from './Contact'

import LikeIcon from '../../LikeIcon'

const constacts = [
  { src: 'https://links.papareact.com/f0p', name: 'Jeff Bezoz' },
  { src: 'https://links.papareact.com/kxk', name: 'Elon Musk' },
  { src: 'https://links.papareact.com/zvy', name: 'Bill Gates' },
  { src: 'https://links.papareact.com/snf', name: 'Mark Zukerberg' },
  { src: 'https://links.papareact.com/6gg', name: 'Elisabeth' },
  { src: 'https://links.papareact.com/r57', name: 'James Bond' },
]

const Widgets = () => {
  return (
    <div className='flex-col fixed top-[60px] right-2 hidden xl:flex w-[270px] mt-5 px-4'>

      <div className='flex items-center justify-between'>

      <h2 className='text-xl'>Contacts</h2>

       <div className='flex space-x-2 gap-2 items-center text-gray-500'> 

        <VideoCameraIcon className='h-6' />
        <SearchIcon className='h-6' />
        <DotsHorizontalIcon className='h-6' />

        <LikeIcon />

       </div>
      </div>

      <div className='flex flex-col items-center pt-5 justify-center w-full gap-1'>

       {
         constacts.map(({src, name}) => (
           <Contact key={src} src={src} name={name} />
         ))
       }

      </div>
     

    </div>
  )
}

export default Widgets
