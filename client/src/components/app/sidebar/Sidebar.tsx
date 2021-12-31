import React, { useState } from 'react'

import { images } from '../../../../assets/urls'

import { ISidebarItem } from '../../../models/models'
import SidebarRow from './SidebarRow'

import { useAuth0 } from '@auth0/auth0-react'

const defaultUser = 'https://scontent.fiev20-1.fna.fbcdn.net/v/t1.30497-1/cp0/p60x60/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=JHHYU6s0nhYAX9591_-&_nc_ht=scontent.fiev20-1.fna&oh=00_AT9-HZOFtxI_BtGYoEzPH4Ii7d-8cVbngHcLigqbHNi4FA&oe=61EF18A5'

const Sidebar = () => {

  const {user, isAuthenticated, isLoading, getIdTokenClaims} = useAuth0()
  const [username, setUsername] = useState<string>('')

  getIdTokenClaims().then(data => setUsername(data.nickname!))

  return (
    <div className='md:flex fixed top-[65px] flex-col hidden md:max-w-[30%] w-full overflow-y-auto scrollbar-thin scrollbar-trumb-gray-500 '>

      { isAuthenticated && !isLoading && <SidebarRow to='/' src={user?.picture} title={username} />}

      { !isAuthenticated && <SidebarRow to={'/'} src={defaultUser} title={'Account'} /> }

      <div className='flex flex-col'>
        
       {
          images.map((item: ISidebarItem) => (
            <SidebarRow key={item.src} src={item.src} title={item.title} to={item.to} />
          ))
       }

      </div>

    </div>
  )
}

export default Sidebar
