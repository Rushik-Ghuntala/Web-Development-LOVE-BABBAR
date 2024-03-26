import React, {useState} from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    //set show passwor dand hide password variable 
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [accountType, setAccountType] = useState("student")

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
        if(formData.password !== formData.confirmPassword){
            toast.error("Password Not Mathched!!")
            return;
        }
        setIsLoggedIn(true);
        
        toast.success("Account Created")
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        };
        console.log('Priniting Account data: ')
        console.log(accountData)
        console.log(finalData )

        navigate('/dashboard')

    }


    return (
        <div>

            {/* Student-Instructor Tab  */}
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button 
                    className={`${accountType === 'student' 
                    ? 
                        "bg-richblack-900 text-richblack-5" 
                    : 
                        "bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200 `}
                    onClick={ () => setAccountType("student")}>
                    Student
                </button>
                <button
                    className={`${accountType === 'instructor' 
                    ? 
                        "bg-richblack-900 text-richblack-5" 
                    : 
                        "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 `}
                    onClick={ () => setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
                {/* First Name and Last Name  */}
                <div className='flex w-full gap-x-4'>
                    <label htmlFor="firstName" className='w-full'>
                        <p className='w-full relative text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            First Name:<sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                            required
                            type='text'
                            placeholder='Enter First Name'
                            name='firstName'
                            id='firstName'
                            value={formData.firstName} 
                            onChange={changeHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-5/90'
                        />
                    </label>

                    <label htmlFor="lastName" className='w-full'>
                        <p className=' w-full relative text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Last Name:<sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                            required
                            type='text'
                            placeholder='Enter Last Name'
                            name='lastName'
                            id='lastName'
                            value={formData.lastName} 
                            onChange={changeHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-5/90'
                        />
                    </label>
                </div>

                {/* Email Address  */}
                    <label htmlFor="email">
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Email:<sup className='text-pink-200'>*</sup>
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

                {/* Password and Confirm Password  */}
                <div className='flex w-full gap-x-4'>
                    <label htmlFor="password" className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Create Password:<sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            placeholder='Enter email address'
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
                    </label>

                    <label htmlFor="confirmPassword" className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Confirm Password:<sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                            required
                            type={showConfirmPassword ? ("text") : ("password")}
                            placeholder='Enter email address'
                            name='confirmPassword'
                            id='confirmPassword'
                            value={formData.confirmPassword} 
                            onChange={changeHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-5/90'
                        />

                        <span
                            className='absolute right-3 top-[38px] cursor-pointer '
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) }
                        </span>
                    </label>
                </div>

                <button className='w-full bg-yellow-50 rounded-[8px] font-mediumtext-richblack-900 px-[12px] py-[8px] mt-6'>
                    Create Account
                </button>
            </form>

               

        </div>
    )
}

export default SignupForm