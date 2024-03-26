import React, {useState} from 'react';
import './App.css';

function App() {

  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")

  // console.log(firstName)
  // console.log(lastName)


  // //live printing in console
  // function changeFirstNameHandler(event){
  //   // console.log('Printing First Name')
  //   // console.log(event.target.value)

  //   setFirstName(event.target.value)

  //   // console.log(event.target) //-> shown the perticuler element
  // }

  // function changeLastNameHandler(event){
  //   // console.log('Printing Last Name')
  //   // console.log(event.target.value)

  //   setLastName(event.target.value)

  //   // console.log(event.target) //-> shown the perticuler element
  // }



  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode:"",
    favCar:""
  });

  // console.log(formData)


  function changeHandler(event){
    //destructuring
    const {name, value, checked, type} = event.target;
    setFormData( prevFormData => {
      return {
        ...prevFormData,
        [name] : type === 'checkbox' ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    //print
    console.log("Finally the full Form Data is Printeed: ")
    console.log(formData)
  }





  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label>First Name: </label>
        <input 
          type='text' 
          placeholder='first-name'
          name='firstName'
          value={formData.firstName}
          onChange={changeHandler} />
         
        <br></br>
        <br></br>

        <label>Last Name: </label>
        <input 
          type='text' 
          placeholder='last-name'
          name='lastName'
          value={formData.lastName}
          onChange={changeHandler} />
         
        <br></br>
        <br></br>

        <label>Email ID: </label>
        <input 
          type='email' 
          placeholder='email-id'
          name='email'
          value={formData.email}
          onChange={changeHandler} />
         
        <br></br>
        <br></br>

        <label>Comments: </label>
        <textarea  
          placeholder='Enter your comment...'
          name='comments'
          value={formData.comments}
          onChange={changeHandler} />
         
        <br></br>
        <br></br>

        <label htmlFor='isVisible'>isVisible: </label>
        <input 
          type='checkbox' 
          name='isVisible'
          id='isVisible'
          checked={formData.isVisible}
          onChange={changeHandler} />
         
        <br></br>
        <br></br>

        <fieldset>
        <legend>Mode:</legend>
        <label htmlFor='Online-Mode'>Online Mode: </label>
        <input 
          type='radio' 
          name='mode'
          id='Online-Mode'
          value='Online-Mode'
          checked={formData.mode === 'Online-Mode'}
          onChange={changeHandler} />
         
        <br></br>

        <label htmlFor='Offline-Mode'>Offline Mode: </label>
        <input 
          type='radio' 
          name='mode'
          id='Offline-Mode'
          value='Offline-Mode'
          checked={formData.mode === 'Offline-Mode'}
          onChange={changeHandler} />
        </fieldset>


        <br></br>
        <br></br>

        <label htmlFor='favCar'>Faviorite Car:</label>
        <select
          name='favCar'
          id='favCar'
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value='Scorpio'>Scorpio</option>
          <option value='Fortuner'>Fortuner</option>
          <option value='Tharrr'>Tharrr</option>
          <option value='Legender'>Legender</option>
          <option value='Defender'>Defender</option>
        </select>


        <br></br>
        <br></br>

        {/* <input type='submit' value='submit'/> */}
        <button>Submit</button>



      </form>
    </div>
  );
}

export default App;
