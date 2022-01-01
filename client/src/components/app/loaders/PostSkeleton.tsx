import React from 'react'

const PostSkeleton = () => {
  return (
    <div className="bg-white my-5 p-2 sm:p-4 rounded-2xl shadow-lg flex flex-col gap-5 select-none ">
      <div className="h-[360px] w-full rounded-xl bg-gray-200 animate-pulse" ></div>
      <div className="flex flex-col flex-1 gap-5 sm:p-2">
      <div className="mt-auto flex gap-3">
          <div className="bg-gray-200 w-full h-8 animate-pulse rounded-full" ></div>
          <div className="bg-gray-200 w-full h-8 animate-pulse rounded-full" ></div>
          <div className="bg-gray-200 w-full h-8 animate-pulse rounded-full ml-auto" ></div>
        </div>
        <div className="flex flex-1 flex-col gap-3">

          <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div className="bg-gray-200 w-full animate-pulse h-12 rounded-2xl" ></div>
        </div>
      
      </div>
</div>

  )
}

export default PostSkeleton
