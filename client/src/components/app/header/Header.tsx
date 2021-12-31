import React from 'react'

import HeaderSearch from './HeaderSearch'
import HeaderIcon from './HeaderIcon'

import { XIcon } from '@heroicons/react/solid'

import { useHistory } from 'react-router-dom'

import { useAuth0 } from '@auth0/auth0-react'
import { useMutation } from '@apollo/react-hooks'
import { UPDATE_USER_IMAGE, GET_CURRENT_USER } from '../../../graphql/queries'
import { observer } from 'mobx-react-lite'
import { useQuery } from '@apollo/react-hooks'

import currentUser from '../../../store/currentUser'

import { useEffect } from 'react'

import { HomeOutlineIcon, HomeFilledIcon, GroupIconFilled, UserGroupOutline, PeopleFilledIcons, PeopleOutlineIcon } from '../../../../assets/icons'

import RightHeader from './RightHeader'

const Header: React.FC<{tranparent?: boolean}> = ({tranparent}) => {

  const { user, isLoading } = useAuth0()
  const [updateUserImage] = useMutation(UPDATE_USER_IMAGE)

  useEffect(() => {
    if (user) {
      currentUser.setEmail(user.email!)
      
    }
  }, [isLoading])


  const history = useHistory()
  
  const pushHistory = () => {
    history.go(-1)
  }

  useEffect(() => {
    if (user?.email) {
      updateUserImage({ variables: { email: user?.email, picture: user?.picture } })
    }
  
  }, [user?.email])

  return (
    <>

    { !tranparent && <div className='w-full h-[56px]' />}

    <div className={'flex items-center w-full fixed top-0 z-50 px-2 lg:px-5 ' + (!tranparent && 'bg-white shadow-md')}>

      <div className='flex items-center gap-10 p-2'>

        { tranparent && <XIcon onClick={pushHistory.bind(null)} className='h-7 w-7 text-gray-100 hover:text-white translate-x-7 duration-200 cursor-pointer ' />  }
          
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" 
          alt="ddd" 
          width={40} height={40} 
          className='object-contain' 
        />

      </div>

    
    { !tranparent && <HeaderSearch />}

     <div className='flex justify-center items-center flex-grow '>

   { !tranparent && <div className='flex items-center justify-between w-full max-w-[330px]'>

    <HeaderIcon Icon={HomeOutlineIcon} SecondIcon={HomeFilledIcon} to='/' />

    <HeaderIcon Icon={UserGroupOutline} SecondIcon={GroupIconFilled} to='/friends' /> 

    <HeaderIcon Icon={PeopleOutlineIcon} SecondIcon={PeopleFilledIcons} to='/groups' />
         
       </div>}
       

       </div>

      <div>
       <RightHeader istransparent={tranparent} />
      </div>
      
    </div>

    </>
  )
}

export default observer(Header)
