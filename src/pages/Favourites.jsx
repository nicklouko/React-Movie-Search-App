import {FavouritesContext} from "../context/FavouritesContext.jsx"
import {useContext} from 'react';
import MovieCard from "../components/MovieCard.jsx";
function Favourites(){
    const {favourites, setFavourites} = useContext(FavouritesContext);

    function handleRemove(movie){
        setFavourites(favourites=>favourites.filter((fav)=>fav.id!==movie.id))

    }

    return(
           
        <div>
           <h1>Favourites:</h1>
             <ul style={{ listStyle:'none', display:'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap:'20px'}}>
                {favourites?.map((movie)=>(
                    
                    <MovieCard key={movie.id} movie={movie} button={'Remove'} handleButton={handleRemove}></MovieCard>
                    
                    
                ))}  
            </ul>
        </div> 
    )


}

export default Favourites;