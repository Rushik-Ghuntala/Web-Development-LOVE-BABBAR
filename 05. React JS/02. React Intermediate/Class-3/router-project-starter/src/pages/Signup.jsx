import React from 'react'
import Template from '../components/Template'
import signupImage from '../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
        <Template
            title='Join the millions learning to code with StudyNotion for free'
            desc1='Buils Skill for Today, Tomorrow and beyond.'
            desc2='Education to future-proof your career.'
            image={signupImage}
            formType='signup'
            setIsLoggedIn={setIsLoggedIn}
        />
    </div>
  )
}

export default Signup