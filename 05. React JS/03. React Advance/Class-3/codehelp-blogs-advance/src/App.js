import React, { useContext, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContext'
import { Routes, Route, useLocation, useSearchParams } from 'react-router-dom'
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import TagPage from './pages/TagPage'
import CategoryPage from './pages/CategoryPage'

const App = () => {

  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  useEffect(() => {

    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes('tags')){
      //iska matlab tag wala age show karvana hai
      //niche wali line ka matlab hain->  last wale slash(/) ke bad vali value le ke aao
      //matklab --> codehelp/blogs/blogCategory/AI --> output: AI -> this is for example
      const tag = location.pathname.split('/').at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes('categories')){
      const category = location.pathname.split('/').at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null, category);
    }
    else{
      fetchBlogPosts(Number(page))
    }
    
    // fetchBlogPosts();
  },[location.pathname, location.search]);
  //jab bhi pathname.location me kuchh update aaye to ye useEffect chael and jab mera page change ho tab bhi

  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:blogId' element={<BlogPage/>}/>
        <Route path='/tags/:tag' element={<TagPage/>}/>
        <Route path='/categories/:category' element={<CategoryPage/>}/>
      </Routes>
      
    </div>
  )
}

export default App