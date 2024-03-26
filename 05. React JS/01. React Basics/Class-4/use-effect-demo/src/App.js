import { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [text, setText] = useState('');
  const [name, setName] = useState('Love');


  // variation --> 1 Every Render
  // useEffect(() => {
  //   console.log('UI RENDER')
 
  // });


  // variation --> 2 First Render 
  // useEffect(() => {
  //   console.log('UI RENDER')
 
  // },[]);

  // variation --> 3 First Render + whenever dependency is change
  // useEffect(() => {
  //   console.log('name CHANGE OBSERVED')
 
  // },[name]);

  // variation --> 3.1 First Render + whenever dependency is change
  // useEffect(() => {
  //   console.log('name CHANGE OBSERVED')
 
  // },[text]);
  
  // variation --> 4 to handle unmounting of a component
  useEffect(() => {
    // add event listener
    console.log('Listener Added')

    return( () =>{
      console.log('Listner Removed')
    })
 
  },[text]);
  




  function changeHandler(event){
    console.log(text);
    setText(event.target.value)
  }


  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
