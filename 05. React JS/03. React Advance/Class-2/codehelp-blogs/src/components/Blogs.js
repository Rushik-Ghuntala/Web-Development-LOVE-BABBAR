import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';


const Blogs = () => {

  const {posts,loading} = useContext(AppContext);
  

  return (
    <div className='w-11/12 max-w-[690px] py-3 mt-[90px] mb-[90px] flex flex-col gap-y-7'>
      {
        loading ? <Spinner/> : (
          posts.length === 0 ? (
            <div>
              <p>No Posts Found!</p>
            </div>
          ) : (
            //ye lo sare posts ko map karo and usme se ek post lelo aur usko Card ne show karvado
            posts.map( (post) => (
              <div key={post.id} className='shadow-2xl hover:shadow-indigo-500/40 rounded-lg py-8 px-5'>
                <p className='font-bold text-md '>{post.title}</p>
                <p className='text-[13px]'> 
                  By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                </p>
                <p className='text-[13px]'>Posted on {post.date}</p>
                <p className='text-[14px] mt-[10px] text-justify'>{post.content}</p>
                <div className='flex gap-x-3'>
                  {post.tags.map( (tag, index) => {
                    return <span key={index} className='text-blue-500 underline font-bold text-[13px] mt-[6px]'>{`#${tag}`}</span>;
                  })}
                </div>
              </div>
              ))
          )
        )
      }
    </div>
  )



    
}

export default Blogs