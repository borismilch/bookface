import { BookOpenIcon, CollectionIcon, BellIcon } from '@heroicons/react/solid'
import { ISidebarRow } from '../models/models'




const sidebarData: ISidebarRow[] = [
  {
    icon: CollectionIcon ,
    text: 'Лента',
    to: '/'
  },

  {
    icon: BookOpenIcon,
    text: 'Stories',
    to: '/'
  },

  
  {
    icon:  BellIcon,
    text: 'Messages',
    to: '/'
  },


]

export default sidebarData