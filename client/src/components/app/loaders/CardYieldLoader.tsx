import React from 'react'
import CardLoader from './CardLoader'

const CardYieldLoader = () => {
  return (
    <div className='grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />

      <CardLoader />
      <CardLoader />
    
      
       
    </div>
  )
}

export default CardYieldLoader
