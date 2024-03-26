import React from 'react'
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {

  const navigate = useNavigate();

  function clickHandler(){
    navigate('/support')
  }

  function backHandler(){
    navigate(-1)
  }
  
  return (
  <div>
    <div>AboutUs</div>
    <button onClick={clickHandler}>move to Support Page</button>
    <button onClick={backHandler}>GO BACK</button>
  </div>
    
  )
}

export default AboutUs