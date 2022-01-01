import React from 'react'
import InputBox from '../home/input/InputBox'
import GroupHeading from './GroupHeading'
import GroupSelect from './GroupSelect'

import GroupAddition from './GroupAddition'


const GroupVew = () => {
  return (
    <div  className='flex opacity-80 md:max-h-[600px] overflow-y-auto cursor-not-allowed flex-col gap-2 w-full max-w-[1050px] p-5 shadow-2xl rounded-2xl mx-auto  pb-16 '>

      <h4 className='text-sm mt-14 md:mt-0 text-[#212121] font-semibold'>Предварительный просмотр на ПК</h4>

      <img
        src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
        className='filter grayscale '
        alt="s" 
      /> 


      <GroupHeading />

      <GroupSelect />

      <div className='flex flex-col md:flex-row gap-3'>

        <div className='flex-[0.65]'>

        <InputBox />

        </div>

        <div className='flex-[0.35]'>

        <GroupAddition />


        </div>

      </div>


      
    </div>
  )
}

export default GroupVew
