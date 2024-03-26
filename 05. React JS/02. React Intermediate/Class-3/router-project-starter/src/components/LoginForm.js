import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';




const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    //set show passwor dand hide password variable 
    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(event){
        setFormData(prevData => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In")
        navigate('/dashboard')
    }


    return (
        <div>

            <form className='flex flex-col w-full gap-y-4 mt-6'
             onSubmit={submitHandler}>
                <label htmlFor="email" className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Email Address:<sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type='email'
                        placeholder='Enter email address'
                        name='email'
                        id='email'
                        value={formData.email} 
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-5/90'
                    />
                </label>

                <label htmlFor="password" className='relative w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Password:<sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        placeholder='Enter Password'
                        name='password'
                        id='password'
                        value={formData.password} 
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-5/90'
                    />

                    <span
                        className='absolute right-3 top-[38px] cursor-pointer '
                        onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) }
                    </span>

                    <Link to='#'>
                        <p className='max-w-max text-xs mt-1 text-blue-100 ml-auto'>Forgot Password</p>
                    </Link>
                </label>

                <button className='bg-yellow-50 rounded-[8px] font-mediumtext-richblack-900 px-[12px] py-[8px] mt-6'>
                    Sign In
                </button>
            </form>

        </div>
    )
}

export default LoginForm