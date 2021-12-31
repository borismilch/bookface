import React from 'react'

const Contact: React.FC<{src: string, name: string}> = ({src, name}) => {
  return (
    <div className='widgetContact relative'>

      <div className='relative'>
        <img src={src} className='avatar' alt="ava" />
        <div className='bg-green-500 rounded-full h-3 w-3 absolute right-0 bottom-0 ' />
      </div>
     

    


      <p className='text-sm font-semibold'>{name}</p>
    </div>
  )
}

export default Contact
