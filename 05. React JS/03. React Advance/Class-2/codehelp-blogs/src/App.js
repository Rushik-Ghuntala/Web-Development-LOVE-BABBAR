import React, { useContext, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContext'

const App = () => {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    // console.log(fetchBlogPosts(1));
    //do this man ehat are you doing?
    fetchBlogPosts();
  },[]);

  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Header />
      <Blogs/>
      <Pagination />
      
    </div>
  )
}

export default App