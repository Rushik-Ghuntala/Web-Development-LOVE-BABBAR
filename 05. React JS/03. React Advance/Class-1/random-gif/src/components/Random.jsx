import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

  const {gif, loading, fetchData} = useGif()

  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState(false);

  

  // async function fetchData(){
  //   setLoading(true)

  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   const output = await axios.get(url);

  //   const imageSource = output.data.data.images.downsized_large.url;

  //   setGif(imageSource)

  //   setLoading(false)

  //   // console.log(imageSource)

  //   // console.log(output)
  // }
  

  // useEffect(() => {
  //   fetchData();
  // },[])


  // function clickHandler(){
  //   fetchData();
  // }


  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-xl underline uppercase font-bold mt-[15px]'>A Random Gifs</h1>
        {
          loading ? (<Spinner/>) : <img src={gif} alt="gifs" width={450}/>
        }
        <button
          onClick={() => fetchData()}
          className='w-10/12 bg-white text-lg py-2 rounded-lg uppercase  mb-[20px]'
        >Generate</button>
    </div>
  )
}

export default Random;