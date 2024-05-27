import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { Post } from "../PostType";

const Home: React.FC = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState<boolean>(false)
  
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchProductData(){
    setLoading(true);

    try{
      const result = await fetch(API_URL);

      const data: Post[] = await result.json();

      setPosts(data);

      console.log("Data is: ", data);
      console.log("Posts  is: ", posts)
    }
    catch(error){
      console.log("Error accoured in fetxh API")
      setPosts([])
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchProductData();
  },[])

  return (
    <div>
      {
        loading ? (<Spinner/>) 
        : 
          posts.length > 0 ?
            (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
              {
                posts.map( (post: Post) => (
                  <Product key={post.id} post={post}/>
                ))
              }
            </div>) 
            :
              (<div className="flex justify-center items-center">
                No Data Found
              </div>)
      }
    </div>
  );
};

export default Home;
