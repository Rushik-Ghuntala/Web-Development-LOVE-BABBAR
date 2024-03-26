import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {

  const [tag, setTag] = useState();

  const {gif, loading, fetchData} = useGif(tag)

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-xl underline uppercase font-bold mt-[15px]'>Random {tag} Gifs</h1>
        {
          loading ? (<Spinner/>) : <img src={gif} alt="gifs" width={450}/>
        }

        <input 
          className='w-10/12 bg-white text-lg py-2 rounded-lg uppercase  mb-[3px] text-center'
          type='text'
          name='tag'
          value={tag}
          onChange={(event) => setTag(event.target.value)}
        />

        <button
          onClick={() => fetchData(tag)}
          className='w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]'
        >Generate</button>
    </div>
  )
}

export default Tag