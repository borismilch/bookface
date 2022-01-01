import React from 'react'

import { useState } from 'react'
import UserLoader from '../loaders/UserLoader'

const Contact: React.FC<{src: string, name: string}> = ({src, name}) => {

  const [imageLoaded, setImageLoaded] = useState<boolean>(false)

  const loadImage = () => {
    setImageLoaded(true)
  }

  return (
    <>

    { !imageLoaded && <UserLoader /> }
     
    <div className={'widgetContact ' + ( !imageLoaded ? 'opacity-0 absolute' : 'opacity-100 relative' )}>

      <div
       onLoad={loadImage.bind(null)}
       className='relative'>
        <img src={src} className='avatar' alt="ava" />
        <div className='bg-green-500 rounded-full h-3 w-3 absolute right-0 bottom-0 ' />
      </div>

      <p className='text-sm font-semibold'>{name}</p>
    </div>

    </>
  )
}

export default Contact
