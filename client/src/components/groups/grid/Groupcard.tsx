import React, { useEffect } from 'react'
import { IGroup } from '../../../models/models'

import { XIcon } from '@heroicons/react/outline'

import { useHistory } from 'react-router-dom'

import GroupLoader from '../../app/loaders/GroupLoader'
import currentUser from '../../../store/currentUser'
import { useState } from 'react'

import { useMutation } from '@apollo/react-hooks'
import { SUBSCRIBE_ON_GROUP, GET_GROUPS } from '../../../graphql/queries/groups'

const Groupcard: React.FC<{group: IGroup}> = ({group}) => {

  const [subscribe] = useMutation(SUBSCRIBE_ON_GROUP)
  const [sub, setSub] = useState<boolean>(false)

  const history = useHistory()

  const [imageLoaded, setImageLoaded] = useState<boolean>(false)

  const pushHistory = () => {
    history.push({
      pathname: '/group/' + group._id ,
      state: { groupId: group._id }
      
    })
  }

  const subscribeOnGroup = () => {
    setSub(prev => !prev)
    subscribe({variables: { email: currentUser.email, id: group._id }, refetchQueries: [GET_GROUPS]})
  }

  const loadImage = () => {
    setImageLoaded(true)
  }

  useEffect(() => {

    setSub(group.customers.includes(currentUser.email))
  }, [])

  return (
     <div>
      {!imageLoaded && <GroupLoader />}

    <div className={'w-full flex flex-col shadow-lg rounded-xl border relative border-gray-200 overflow-hidden ' + (
      imageLoaded ? 'opacity-100 relative visible' : 'opacity-0 absolute invisible'
    )}>

      <div className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer active:scale-90 transition-all duration-200  absolute top-1 right-1 bg-opacity-60'>
          <XIcon className='h-5 w-5' />
      </div>

      <div className='w-full h-[200px]'>
        <img
         
         onClick={pushHistory.bind(null)}
         onLoad={loadImage.bind(null)}
         src={group.picture} className='w-full cursor-pointer transition-all duration-200 filter brightness-90 hover:brightness-95 rounded-t-xl  h-full object-cover' alt="kkk" />
      </div>

    <div className='flex flex-col border-t border-gray-300 justify-between p-4 pt-2 bg-white min-h-[100px]'>

      <div className='flex flex-col pb-10'>

        <h1 className='font-semibold text-[#212121] text-lg'>{group.title}</h1>

        <p className='text-gray-600 text-sm '>{group.customers.length} Учасників</p>

      </div>

     { !sub ? <button 
         onClick={subscribeOnGroup.bind(null)}
        className='gray-btn font-semibold text-center 
        flex justify-center'
       >Goin the group</button>
       :
       <button 
         onClick={subscribeOnGroup.bind(null)}
       className='gray-btn bg-red-500 text-white hover:bg-red-600 font-semibold text-center 
       flex justify-center'
      >Leave the group</button>
     
     }



    </div>

    </div>
    </div>
  )
}

export default Groupcard
