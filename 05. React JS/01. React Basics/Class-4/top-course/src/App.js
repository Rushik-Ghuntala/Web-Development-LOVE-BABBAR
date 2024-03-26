import React from "react";
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from "./components/Spinner";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

const App = () => {


  const [courses, setCourses] = useState(null);

  //Loading
  const [loading, setLoading] = useState(true)

  const [category, setCategory] = useState(filterData[0].title)

  // api called by useEffect
  useEffect( () => {
    
    const fetchData = async()=> {
      setLoading(true)
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        //save data in a variablec
        // console.log(data);
        setCourses(output.data);
      }
      catch(error){
        toast.error("Somthing Wrong in API")
      }
      setLoading(false)
    }

    fetchData();

  },[]);


  
  

  
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2 ">
      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2 ">
        <div>
          <Filter
            filterData = {filterData}
            category = {category}
            setCategory={setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
            {
              loading ? (<Spinner/>) : (<Cards courses = {courses} category={category}/>)
            }
        </div>
      </div>
    </div>
  );
};

export default App;
