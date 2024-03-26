import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div className='w-full border shadow-lg py-4 mb-[1rem] top-0 bg-white'>
        <Header/>
        <div >
            <Blogs/>
            <Pagination/>
        </div>
    </div>
  )
}

export default Home