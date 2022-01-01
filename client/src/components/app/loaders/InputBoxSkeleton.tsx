import React from 'react'

const InputBoxSkeleton = () => {
  return (
    <div className="bg-white h-[360px] my-5 p-2 sm:p-4 rounded-2xl shadow-lg flex flex-col gap-5 select-none ">
    <div className="h-[220px] w-full rounded-xl bg-gray-200 animate-pulse" ></div>
    <div className="flex flex-col flex-1 gap-5 sm:p-2">

    <div className="bg-gray-200 w-full h-4 animate-pulse rounded-full" />

    <div className="bg-gray-200 w-full h-2 animate-pulse rounded-full" />


    <div className="mt-auto flex flex-col gap-3 pt-4">
      <div className="bg-gray-200 w-full h-12 animate-pulse rounded-full" ></div>
     
      
     </div>
    </div>
  </div>
  )
}

export default InputBoxSkeleton
