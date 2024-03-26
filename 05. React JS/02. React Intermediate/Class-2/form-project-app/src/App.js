import React, { useState } from 'react'

const App = () => {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        country:"India",
        street:"",
        city:"",
        state:"",
        zip:"",
        comments:false,
        candidates:false,
        offers:false,
        notifications:""
    })


    function changeHandler(event){
        const {name, type, checked, value} = event.target

        setFormData(prevFromData => {
            return {
                ...prevFromData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }
    // console.log(formData)

    function submitHandler(event){
        event.preventDefault();
        console.log("Button Submit ho gaya mere Dost....")
        console.log(formData)
    }




    return (
        <div className='flex flex-col items-center'>
            <form onSubmit={submitHandler}>
           
                    <label htmlFor="firstName">First Name</label>
                    <br/>
                    <input
                        type='text'
                        placeholder='Rushik'
                        name='firstName'
                        id='firstName'
                        value={formData.firstName}  
                        onChange= {changeHandler}
                        className='outline '
                    />

                    <br/>

                    <label htmlFor="lastName">Last Name</label>
                    <br/>
                    <input
                        type='text'
                        placeholder='Soni'
                        name='lastName'
                        id='lastName'
                        value={formData.lastName}  
                        onChange= {changeHandler}
                        className='outline '
                    />
     
                    <br/>

                    <label htmlFor="email">Email Address</label>
                    <br/>
                    <input
                        type='email'
                        placeholder='abc@gmail.com'
                        name='email'
                        id='email'
                        value={formData.email}  
                        onChange= {changeHandler}
                        className='outline '
                    />
     
                    <br/>

                    <label htmlFor="country">Country</label>
                    <br/>
                    <select
                        name='country'
                        id='country'
                        value={formData.country}  
                        onChange= {changeHandler}
                        className='outline '
                    >
                    <option  value = "India" >India</option>
                    <option  value = "UK">UK</option>
                    <option  value = "Canada">Canada</option>
                    <option  value = "Maxico">Maxico</option>


                    </select>

                    <br/>

                    <label htmlFor="street">Street Address</label>
                    <br/>
                    <input
                        type='text'
                        placeholder='123 street'
                        name='street'
                        id='street'
                        value={formData.street}  
                        onChange= {changeHandler}
                        className='outline '
                    />

                    <br/>

                    <label htmlFor="city">City</label>
                    <br/>
                    <input
                        type='city'
                        placeholder='City'
                        name='city'
                        id='city'
                        value={formData.city}  
                        onChange= {changeHandler}
                        className='outline '
                    />

                    <br/>

                    <label htmlFor="state">State / Province</label>
                    <br/>
                    <input
                        type='state'
                        placeholder='Gujarat'
                        name='state'
                        id='state'
                        value={formData.state}  
                        onChange= {changeHandler}
                        className='outline '
                    />
     
                    <br/>

                    <label htmlFor="zip">ZIP/Postal Code</label>
                    <br/>
                    <input
                        type='zip'
                        placeholder='394107'
                        name='zip'
                        id='zip'
                        value={formData.zip}  
                        onChange= {changeHandler}
                        className='outline '
                    />

                    <fieldset>
                        <legend>By Email</legend>

                        <div className='flex items-baseline gap-2'>
                            <input
                            type='checkbox'
                            name='comments'
                            id='comments'
                            checked={formData.comments}  
                            onChange= {changeHandler}
                            />
                            <div>   
                                <label htmlFor='comments'>Comments</label>
                                <p>Get notified when someones posts a comment on a posting.</p>
                            </div>
                        </div>

                        <div className='flex items-baseline gap-2'>
                            <input
                            type='checkbox'
                            name='candidates'
                            id='candidates'
                            checked={formData.candidates}  
                            onChange= {changeHandler}
                            />
                            <div>   
                                <label htmlFor='candidates'>Candidates</label>
                                <p>Get notified when a candidate applied for a job.</p>
                            </div>
                        </div>

                        <div className='flex items-baseline gap-2'>
                            <input
                            type='checkbox'
                            name='offers'
                            id='offers'
                            checked={formData.offers}  
                            onChange= {changeHandler}
                            />
                            <div>   
                                <label htmlFor='offers'>Offers</label>
                                <p>Get notified when a candidate accepts or rejects an offer.</p>
                            </div>
                        </div>

                    </fieldset>

                    <br/>

                    <fieldset>
                        <legend>Push Notifications</legend>
                        <p>These are delivered vis SMS to your mobile phone.</p>

                        <input
                            type='radio'
                            id='pushEverything'
                            name='notifications'
                            value='Everything'
                            onChange={changeHandler}
                        />
                        <label htmlFor='pushEverything'>Everything</label>
                        <br/>

                        <input
                            type='radio'
                            id='pushEmail'
                            name='notifications'
                            value='Same as Email'
                            onChange={changeHandler}
                        />
                        <label htmlFor='pushEmail'>Same as Email</label>
                        <br/>

                        <input
                            type='radio'
                            id='pushNothing'
                            name='notifications'
                            value='No Push Notifications'
                            onChange={changeHandler}
                        />
                        <label htmlFor='pushNothing'>No Push Notifications</label>
                    </fieldset>

                    <button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>Save</button>
     
            </form>
        </div>
    )
}

export default App