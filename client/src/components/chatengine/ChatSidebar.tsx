import React from 'react'
import SidebarContainer from '../app/containers/SidebarContainer'

const ChatSidebar: React.FC<{nonJustify?: boolean}> = ({children, nonJustify}) => {
  return (
    <SidebarContainer lg={true}>
      <>

      <div className='flex flex-col flex-grow '>

        <div className='flex flex-grow flex-col items-center py-3'>

         {children}

        </div>

      </div>
  
    </>
      
    </SidebarContainer>
  )
}

export default ChatSidebar
