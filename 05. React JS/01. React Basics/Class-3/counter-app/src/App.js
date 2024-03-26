import {useState} from 'react';
import "./App.css";

function App(props) {

  const [count, setConunt] =  useState(0);


  function decreaseHandler(){
    setConunt(count-1)
  }

  function increaseHandler(){
    setConunt(count+1)
  }

  function resetHandler(){
    setConunt(0)
  }



  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-md text-2xl">Increment And Decrement</div>
      <div className="flex bg-[white] justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decreaseHandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>
          -
        </button>

        <div className='font-bold gap-12 text-5xl'>
          {count}
        </div>

        <button onClick={increaseHandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>
          +
        </button>
      </div>

      <button onClick={resetHandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'>
        Reset
      </button>
    </div>
  );
}

export default App;
