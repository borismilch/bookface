import React, { ChangeEvent, SyntheticEvent } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { VideoCameraIcon, CameraIcon, EmojiHappyIcon } from '@heroicons/react/solid'

import { useRef, useState } from 'react'

import { useMutation } from '@apollo/react-hooks'

import { v4 as uuidv4 } from 'uuid'

import { ref, uploadString, getDownloadURL } from 'firebase/storage'

import { storage } from '../../../firebase'

import { ADD_POST, GET_POSTS } from '../../../graphql/queries'

const InputBox = () => {

  const [img, setImg] = useState<string>('')
  const [title, setTitle] = useState<string>('')

  const fileInputRef = useRef<HTMLInputElement>(null)

  const { user, isLoading, getIdTokenClaims } = useAuth0()

  const  [addPost]  = useMutation(ADD_POST)

  const addToStorage = async (data_url: string) => {
    const id = uuidv4()

    const imageRef = ref(storage, 'posts/' + id)

    await uploadString(imageRef, data_url, 'data_url')

    const downloadUrl = getDownloadURL(imageRef)

    return downloadUrl
  }

  const onFileChange = () => {

    const reader = new FileReader()
    const file = fileInputRef.current!.files![0]

    reader.readAsDataURL(file)

    reader.onload = async (e: ProgressEvent<FileReader>) => {
      const url = await addToStorage(reader.result + '')

      setImg(url)
    }
  
  }

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleFormSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { aud } = await getIdTokenClaims()
    console.log(user, aud)
    try {

      addPost({
        variables: { "image": img,  "body": title, "userId": user!.email, userImg: user!.picture },
        refetchQueries: [GET_POSTS]
      })
    
    } catch (e) { console.log(e) }

    setTitle('')
    setImg('')

  }

  return (
    <div className='bg-white flex flex-col text-gray-500 items-center p-4 pb-1 space-x-4 rounded-2xl shadow-md font-medium mt-6'>

     <div className='flex items-center w-full'>
      <img
        src={ user?.picture } 
        alt="" 
        className='rounded-[50%] w-[40px] h-[40px]'
        
        />

        <form onSubmit={handleFormSubmit} className='flex flex-1 items-center'>
          <input 
            value={title}
            onChange={onChangeTitle.bind(null)}
            className='rounded-full flex-grow px-5 focus:outline-none h-12 bg-gray-100'
            type="text"
            placeholder={'whats on your mind ' + user?.name}
          />

          { !!img &&  <img src={img} onClick={() => setImg('')} alt="d" className='mini_img' />}

          <button hidden type='submit'>Submit</button>
        </form>
     </div>

      <div className='flex justify-evenly w-full p-3 border-t '>

        <div className='pickIcon'>
          <VideoCameraIcon className='text-red-500 h-8 w-8' />
          <p className='text-xs sm:text-sm xl:text-sm'>Live Video</p>
        </div>

        <div className='pickIcon' onClick={() => fileInputRef.current?.click()}>
          <CameraIcon onClick={() => fileInputRef.current?.click()} className='text-green-500 h-8 w-8' />
          <p className='text-xs sm:text-sm xl:text-sm'>Choose Photo</p>
          <input hidden type="file" onChange={onFileChange} ref={fileInputRef} />
        </div>

        <div className='pickIcon'>
          <EmojiHappyIcon className='text-yellow-500 h-8 w-8' />
          <p className='text-xs sm:text-sm xl:text-sm'>Filling / Emotions</p>
        </div>

      </div>
      
    </div>
  )
}

export default InputBox
