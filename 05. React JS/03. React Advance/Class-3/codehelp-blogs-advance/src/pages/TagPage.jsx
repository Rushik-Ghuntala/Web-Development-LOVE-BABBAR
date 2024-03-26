import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const TagPage = () => {

    const navigation = useNavigate()

    const location = useLocation();

    const tag = location.pathname.split('/').at(-1).replaceAll("%20", " ");
    console.log(tag);

    return (
        <div className='w-full mx-auto  mt-[90px] mb-[90px] bg-white'>
            <Header/>
            <div className='w-11/12 max-w-[690px] mb-[-70px] flex items-center mx-auto gap-x-7'>
                <button
                    className='w-[100px] border text-white bg-violet-500 rounded-lg py-2 px-5'
                    onClick={() => navigation(-1)}
                >
                    back
                </button>
                <h2 className='font-bold text-[20px]'>
                    Blogs Tagged <span>#{tag}</span>
                </h2>
            </div>
            <Blogs/>
            <Pagination/>
        </div>
    )
}

export default TagPage