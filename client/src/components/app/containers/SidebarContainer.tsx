import React from 'react'

const SidebarContainer: React.FC<{lg?: boolean}> = ({children, lg}) => {
  return (
    <div className='sticky top-[56px] bg-white'>
      <div className={'w-[22vw] hidden ' + ( lg? "xl:block" : "lg:block" )} />

      <div className={'flex-col fixed top-12 h-screen left-0 p-3 max-w-[340px] bg-white w-full hidden border-r border-gray-300 shadow-md  ' + ( lg? "xl:flex" : "lg:flex" )}> 
      {children}

      </div>
      
    </div>
  )
}

export default SidebarContainer
