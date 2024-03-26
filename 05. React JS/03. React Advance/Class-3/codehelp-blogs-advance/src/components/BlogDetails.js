import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';

const BlogDetails = ({post}) => {



  return (
    <div className='w-full mx-auto max-w-[690px] py-3  flex flex-col justify-center items-center gap-y-7'>
    <div  key={post.id} className='shadow-2xl hover:shadow-indigo-500/40 rounded-lg py-8 px-5'>
        <NavLink to={`/blog/${post.id}`}>
            <p className='font-bold text-md '>{post.title}</p>
        </NavLink>
        <p className='text-[13px]'> 
            By 
                <span className='italic'>{post.author}</span> 
            on {" "}
                <NavLink to={`/categories/${post.category.replaceAll("-"," ")}`}>
                    <span className='underline font-bold'>{post.category}</span>
                </NavLink>
        </p>
        <p className='text-[13px]'>Posted on {post.date}</p>
        <p className='text-[14px] mt-[10px] text-justify'>{post.content}</p>
        <div className='flex gap-x-3'>
            {post.tags.map( (tag, index) => (
                <NavLink key={index} to={`/tags/${tag.replaceAll("-"," ")}`}  >
                    <span className='text-blue-500 underline font-bold text-[13px] mt-[6px]'>
                        {`#${tag}`}
                    </span>
                </NavLink>
            ))}
        </div>
        </div>






        {/* <div key={post.id} className='shadow-2xl hover:shadow-indigo-500/40 rounded-lg py-8 px-5'>
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
        </div> */}
    </div>
  )
}

export default BlogDetails