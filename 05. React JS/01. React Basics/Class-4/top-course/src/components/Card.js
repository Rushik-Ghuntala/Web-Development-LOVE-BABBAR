import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import {toast} from 'react-toastify';

const Card = ({course, likedCourse, setLikedCourse}) => {

    function clickHandler(){
        //logic
        if(likedCourse.includes(course.id)){
            //liked hua pada hai
            setLikedCourse( (prev) => prev.filter((cid) => ( cid !== course.id) ) );
            toast.warning('Liked Remove');
        }
        else{
            //pehle se like nahi hai
            // insert karna hai ye course ko likedCourse me
            if(likedCourse === 0){
                setLikedCourse([course.id])
            }
            else{
                //non-empty
                setLikedCourse( (prev) => [...prev, course.id]);
            }
            toast.success("Liked Sucessfully")
        }
    }


    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url} alt={course.image.alt}></img>

                <div className='absolute w-[40px] h-[40px] bg-white rounded-full right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            likedCourse.includes(course.id) ? <FcLike fontSize='1.75rem'></FcLike> : <FcLikePlaceholder fontSize='1.75rem'></FcLikePlaceholder>
                        }
                    </button>
                </div>
            </div>

            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        course.description.length > 100 ? (course.description.substr(0,100)) + "..." : (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card