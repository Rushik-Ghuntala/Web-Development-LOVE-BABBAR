import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';
import BlogDetails from './BlogDetails';


const Blogs = () => {

  const {posts,loading} = useContext(AppContext);
  

  return (
    <div className='w-11/12 max-w-[690px] py-3 mt-[90px] mb-[90px] flex flex-col mx-auto gap-y-7'>
      {
        loading ? <Spinner/> : (
          posts.length === 0 ? (
            <div>
              <p>No Blogs Found!</p>
            </div>
          ) : (
            //ye lo sare posts ko map karo and usme se ek post lelo aur usko Card ne show karvado
            posts.map( (post) => (
                <BlogDetails key={post.id} post={post}/>
              ))
          )
        )
      }
    </div>
  )



    
}

export default Blogs