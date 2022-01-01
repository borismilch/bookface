import React, { useState } from 'react'
import currentUser from '../../store/currentUser'

import { observer } from 'mobx-react-lite'
import { useContext } from 'react'

import { CreateGroupContext } from '../../views/CreateGroup'
import SidebarContainer from '../app/containers/SidebarContainer'

const FormSidebarContent = () => {

  const [disabled, setDisabled] = useState<boolean>(false)

  const { title, changeHandler, createGroup } = useContext(CreateGroupContext)

  const addNewGroup = () => {
    setDisabled(true)
    createGroup()
  } 

  return (
    <SidebarContainer>
    <div className='items-center flex justify-between flex-grow flex-col w-full py-4 px-3'>

     <div className='flex flex-col flex-grow'>

      <div className='flex gap-4 w-full '>

        <img src={currentUser.picture} className='avatar-lg' alt="ll" />

        <div className='flex flex-col'>

          <p className='font-semibold text-[#000]'>{currentUser.username}</p>

          <span className='text-gray-600 font-semibold text-sm'>Администратор</span>

        </div>

        </div>

        <div className='flex w-full flex-col gap-6 py-4'>
        <input value={title} onChange={changeHandler} type="text" placeholder='Enter the name of the group...' className='add_group_input' />
        </div>

        <div>
        <p className='text-xs text-gray-500'>Публикации в группе могут делать участники и посетители. Администраторы могут проверять новых участников.</p>
        </div>


        <div className='flex w-full flex-col gap-6 py-4'>
        <input type="text" placeholder='Add a friends (optional)...' className='add_group_input' />
        </div>

        <p className='text-xs w-full text-gray-500'>
        Recomwndations: ppfkodsjkfdk
        </p>
     </div>

    <div  className='w-full m-6 pt-5 border-gray-400 border-t'>
      <button 
        disabled={disabled}
        onClick={addNewGroup.bind(null)} 
        className='add_group_button disabled:opacity-50'>Create a Group</button>
    </div>
      
    </div>
      
    </SidebarContainer>
  )
}

export default observer(FormSidebarContent)
