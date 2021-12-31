import { UserGroupIcon, UserAddIcon, UserRemoveIcon, UsersIcon } from '@heroicons/react/solid'
import { ISidebarRow } from '../models/models'


const sidebarData: ISidebarRow[] = [
  {
    icon: UserGroupIcon ,
    text: 'Главная',
    to: '/'
  },

  {
    icon: UserAddIcon,
    text: 'Запросы на добавление в друзья',
    to: '/friedship-requests'
  },

  {
    icon: UserRemoveIcon ,
    text: 'RejectedRequests',
    to: '/'
  },

  {
    icon: UsersIcon,
    text: 'My friends',
    to: '/friends/chats'
  },

]

export default sidebarData