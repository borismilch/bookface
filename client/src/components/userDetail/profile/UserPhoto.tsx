import React from 'react'
import { IPhoto } from '../../../models/models'

import { useHistory } from 'react-router-dom'

const UserPhoto: React.FC<{photo: IPhoto}> = ({photo}) => {

  const history = useHistory()

  const pushHistory = () => {
    history.push({
      pathname: '/photo/' + photo._id,
      state: { id: photo._id }
      
    })
  }

  return (
    <div onClick={pushHistory.bind(null)} key={photo._id} className='relative'>

      <img src={photo.image} className='photo_picture' alt="" />

   </div>
  )
}

export default UserPhoto
