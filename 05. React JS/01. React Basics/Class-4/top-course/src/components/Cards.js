import React, { useState } from 'react'
import Card from './Card';

const Cards = ({courses, category}) => {

    const [likedCourse, setLikedCourse] = useState([])


    // Debugging: Log category and courses
    // console.log("Category:", category);
    // console.log("Courses:", courses);
    

    //return you a list of all courses received from the api response
    function getCourses() {
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach( (courseCatagory) => {
                courseCatagory.forEach( (courseData) => {
                    // console.log(course);
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            //pass array of specific category
            return courses[category];
        }
    }

    
    

    //CODE OPTIMIZED BY CHAT GPT
    // const getCourses = () => {
    //     if (category === 'All') {
    //         // Flatten the courses object to get all courses
    //         return Object.values(courses).flat();
    //     } else {
    //         return courses[category] || [];
    //     }
    // };


    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses() === undefined ? 
                    (<div className='text-white font-bold rounded-md bg-red-500 m-2 p-4'>
                        <h1>No Data Found</h1>
                    </div>) :
                    (getCourses().map( (course) => (
                     <Card key={course.id} course={course} likedCourse = {likedCourse} setLikedCourse = {setLikedCourse} />))
                    )
            }
        </div>
    );
}

export default Cards