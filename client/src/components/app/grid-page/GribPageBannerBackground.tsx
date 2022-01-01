import { useMutation } from '@apollo/react-hooks'
import React, { useRef, useState } from 'react'
import Loader from '../../icons/Loader'

import { addFileToStorage } from '../../../utils/Helpers'
import currentUser from '../../../store/currentUser'
import { observer } from 'mobx-react-lite'
import { IGroup } from '../../../models/models'

const GribPageBannerBackground: React.FC<{group: IGroup}> = ({group}) => {

  const [bgUploading, setBgUploading] = useState<boolean>(false)
  const [bgImage, setBgImage] = useState<string>('')
  const bgInputRef = useRef<HTMLInputElement>(null)

  const changeBgHandler = () => {

    setBgUploading(true)

    const reader = new FileReader()
    const file = bgInputRef.current!.files![0]

    reader.readAsDataURL(file)

    reader.onload = async (e: ProgressEvent<FileReader>) => {
      setBgImage(reader.result + '')
      const url = await addFileToStorage(reader.result + '', 'backgrounds')

      setBgImage(url)
      
      setBgUploading(false)
    }
    
  }

  console.log(group)

  return (
    <div className='w-full relative h-[250px] md:h-[350px] top-0 left-0 bg-gradient-to-t from-gray-200 to-gray-100' >
      <input type="file" hidden onChange={changeBgHandler} ref={bgInputRef} />

   { (currentUser.email === group.creator?.email) && (
      <button 
      onClick={ () => bgInputRef.current?.click() }
      className='gray-btn absolute right-2 top-2 z-10'>Updade Background
    </button>
   )
   }

      <img src={bgImage ? bgImage : group.bgPicture} alt="eee" className='w-full h-full max-h-[350px] object-cover' />
    
      <>
      { bgUploading && (
         <div
         className='overlay opacity-100 rounded-none'>

         <Loader />

       </div>
      ) }
      </>
  </div>
  )
}

export default observer(GribPageBannerBackground)

