import React from 'react'

import { useLocation, Link } from 'react-router-dom'

const HeaderIcon: React.FC<{Icon: Function, SecondIcon: Function, to: string }> = ({Icon, SecondIcon, to}) => {

  const {pathname} = useLocation() 
  const isActive =  pathname === to 

  return (

    <Link  to={to} className={'header_nav_icon border-b-4 border-transparent ' + (isActive && 'border-blue-500' ) }>
      { isActive ? <SecondIcon /> : <Icon />  }
    </Link>
   
  )
}

export default HeaderIcon
