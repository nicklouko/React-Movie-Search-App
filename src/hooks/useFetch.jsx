import { useEffect,useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

function useFetch(url){

    //const fullurl= url + apikey;
    const fullurl = url.includes('?') ? `${url}&${apiKey}` : `${url}?${apiKey}`;

    const [data, setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    
    useEffect(()=>{
        setLoading(true);
        fetch(fullurl)
         .then(res=>res.json())
         .then(data=>{setData(data);
                      setLoading(false);
         })
         
        .catch((err)=>{
            setError(err);
            setLoading(false);
        })
    }, [url])

    return {data, loading, error};    

}

export default useFetch;