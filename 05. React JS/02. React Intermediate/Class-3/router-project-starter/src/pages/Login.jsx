import React from 'react'
import Template from '../components/Template'
import loginImage from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <div>
        <Template
            title='Welcome Back'
            desc1='Buils Skill for Today, Tomorrow and beyond.'
            desc2='Education to future-proof your career.'
            image={loginImage}
            formType='login'
            setIsLoggedIn={setIsLoggedIn}
        />
    </div>
  )
}

export default Login