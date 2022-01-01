import React from 'react'


const CardLoader = () => {
  return (
    <div className="bg-white my-5 rounded-2xl shadow-lg flex flex-col gap-5 select-none ">
    <div className="h-[220px] w-full rounded-xl bg-gray-200 animate-pulse" ></div>
    <div className="flex flex-col flex-1 gap-5 p-2 sm:p-4">

    <div className="mt-auto flex flex-col gap-3">
      <div className="bg-gray-200 w-full h-10 animate-pulse rounded-full" ></div>
      <div className="bg-gray-200 w-full h-10 animate-pulse rounded-full" ></div>
      
     </div>
    </div>
  </div>

  )
}

export default CardLoader
