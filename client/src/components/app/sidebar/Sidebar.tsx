import React from 'react'

import { images } from '../../../../assets/urls'

import { ISidebarItem } from '../../../models/models'
import SidebarRow from './SidebarRow'

import { useAuth0 } from '@auth0/auth0-react'
import currentUser from '../../../store/currentUser'
import { observer } from 'mobx-react-lite'
import SidebarContainer from '../containers/SidebarContainer'

const defaultUser = 'https://scontent.fiev20-1.fna.fbcdn.net/v/t1.30497-1/cp0/p60x60/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=JHHYU6s0nhYAX9591_-&_nc_ht=scontent.fiev20-1.fna&oh=00_AT9-HZOFtxI_BtGYoEzPH4Ii7d-8cVbngHcLigqbHNi4FA&oe=61EF18A5'

const Sidebar = () => {

  const {isAuthenticated, isLoading} = useAuth0()
  return (
    <SidebarContainer>
     
      { isAuthenticated && !isLoading && <SidebarRow to='/' src={currentUser.picture} title={currentUser.username} />}

      { !isAuthenticated && <SidebarRow to={'/'} src={defaultUser} title={'Account'} /> }

      <div className='flex flex-col'>
        
      {
          images.map((item: ISidebarItem) => (
            <SidebarRow key={item.src} src={item.src} title={item.title} to={item.to} />
          ))
      }

     </div>

    </SidebarContainer>

   
  )
}

export default observer(Sidebar)
