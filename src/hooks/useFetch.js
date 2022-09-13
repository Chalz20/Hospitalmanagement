import { useState , useEffect } from 'react'
//the url parameter is the endpoint..
const useFetch =(url) =>{
    //State hooks for loading, data and error
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    
    //useEffect Hook for fetching data from API endpoint
    useEffect (()=>{

     //Function for fetching data 
        const fetchData = async () =>{
          setLoading(true)
           
          try{
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
          } 
          catch(err){
            setError(err)
          }
          setLoading(false)
        }

        fetchData()

    },[url])
     
   return {data,loading,error}   

}

export default useFetch;
