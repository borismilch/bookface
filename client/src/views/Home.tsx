import React from 'react'

import {Header, Widgets, Sidebar, Feed} from '../components/app'


const Home = () => {
  return (
    <div className='flex flex-col'>
      <Header />

      <main className='flex flex-col flex-grow'>

        <div className='flex'>
          <Sidebar />
          <Feed />

          <div className='w-[250px] hidden xl:flex' />

         
          <Widgets />
        </div>
        
      </main>
     
    </div>
  );
};

export default Home
