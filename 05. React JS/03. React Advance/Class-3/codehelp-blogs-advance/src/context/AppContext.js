import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";


//Step 1
export const AppContext = createContext();


export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
    const navigate = useNavigate();

    //data filling pending


    async function fetchBlogPosts(page = 1, tag = null, category){

        setLoading(true);
        
        let url = `${baseUrl}?page=${page}`;

        if(tag){
            url = url + `&tag=${tag}`;
        }

        if(category){
            url = url + `&category=${category}`;
        }
        
        try{
           const result = await fetch(url);

           const data = await result.json();

           if(!data.posts || data.posts.length === 0){
            throw new Error("Somthing went Wron\g")
           }

           console.log("API Response", data);

           setPage(data.page)
           setPosts(data.posts)
           setTotalPages(data.totalPages)
        }
        catch(error){
            console.log('Error in fetching data')
            //do the all in initial data
            setPage(1)
            setPosts([])
            setTotalPages(null)
        }

        setLoading(false)

    }
    

    function handlePageChange(page){
        navigate({search: `?page=${page}`})
        setPage(page);
        // console.log(page)
        // fetchBlogPosts(page);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }

    //Step 2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

