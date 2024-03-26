import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Spinner from '../components/Spinner';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const {loading, setLoading} = useContext(AppContext);

  const blogId = location.pathname.split('/').at(-1);

  const newUrl = 'https://codehelp-apis.vercel.app/api/';

  async function fetchRelatedBlogs(){
    setLoading(true);
    // let url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`;
    let url = `${newUrl}get-blog?blogId=${blogId}`;
    try{
      const res = await fetch(url);
      const data = await res.json();
      console.log("Related Blog:", data)
      
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch(error){
      console.log("Error aa gaya blogId wale page me....")
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false)
  } 

  useEffect(() => {
    if(blogId){
      fetchRelatedBlogs();
    }
  },[location.pathname])


  return (
    <div className='w-full mx-auto py-4 bg-white mt-[90px] mb-[90px]'>
      <Header/>
      <div className='w-full mx-auto flex justify-center items-center'>
        <button
          className='border text-white bg-violet-500 rounded-lg py-2 px-5'
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      {
        loading ? <Spinner/> : 
          blog ? (<div>
            <BlogDetails post={blog}/>
            <h2>Related Blogs</h2>
            {
              relatedBlogs.map( (post) => (
                <div key={post.id}>
                  <BlogDetails post={post}/>
                </div>
              ))
            }
          </div>) 
          : (<h1 className='w-full mx-auto flex justify-center items-center font-bold text-[50px]'>No Blog Found</h1>)
      }

    </div>
  )
}

export default BlogPage