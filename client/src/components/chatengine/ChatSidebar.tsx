import React from 'react'

const ChatSidebar: React.FC = ({children}) => {
  return (
    <div>
    
      <div className='lg:w-[340px]' />
    
      <div className='flex-col fixed h-screen left-0 p-3 max-w-[340px] bg-white w-full hidden lg:flex border-r border-gray-300 shadow-md'>

      <div className='flex flex-col '>

        <div className='flex flex-col items-center justify-between py-3'>

         {children}

        </div>
        
        

        <div className='flex flex-col'>

        

        </div>

      </div>

    </div>
  
      
    </div>
  )
}

export default ChatSidebar
