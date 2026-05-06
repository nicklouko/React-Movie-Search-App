import useFetch from '../hooks/useFetch.jsx'
import {useState, useContext} from 'react'
import MovieCard from '../components/MovieCard.jsx'
import {FavouritesContext} from "../context/FavouritesContext.jsx"



function Home(){
    

    //const {data, loading, error} = useFetch('https://api.themoviedb.org/3/trending/movie/week');
    const [input,setInput] = useState('');
    const searchQuery = input.trim();
    const url = searchQuery? `https://api.themoviedb.org/3/search/movie?query=${input}` : 'https://api.themoviedb.org/3/trending/movie/week'
    const {data,loading,error} = useFetch(url);
    const {favourites, setFavourites} = useContext(FavouritesContext);

    function handleAdd(movie){
      setFavourites(favourites=>[...favourites, {...movie}])

    }

    
    return(
        <div >
            <div style={{textAlign: 'center', padding:'10px', margin:'10px'}}><input style={{border: '1px solid rgb(235, 166, 109)', borderRadius:'10px', width:'20%', height:'15px', padding:'5px'}} type='text' value={input} onChange={(e)=>setInput(e.target.value)}></input></div>
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {!searchQuery? <h1>Explore this week's trending movies:</h1> : <h1>Results for: {input}</h1>}
            
            <ul style={{ listStyle:'none', display:'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap:'20px'}}>
                {data?.results?.map((movie)=>(
                    <MovieCard key={movie.id} movie={movie} button={'Add to Favourites'} handleButton={handleAdd}/>
                ))}  
            </ul>

            

            
             
             
        </div>
    )
}

export default Home