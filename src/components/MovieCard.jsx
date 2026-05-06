import {FavouritesContext} from "../context/FavouritesContext.jsx"
import {useContext} from 'react';
import { Link } from "react-router-dom";

function MovieCard({movie, button, handleButton}){
    const posterurl= `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    const {favourites, setFavourites} = useContext(FavouritesContext)



    function movieAlreadyInFavs(movie){
      if (button==='Remove') return false;
      return favourites.some((mv)=>mv.id===movie.id);
    }
   return(
     <div style={{textAlign:'center', margin: '10px'}}><Link to={`/movie/${movie.id}`} style={{textDecoration:'none', color:'black'}}><img style={{ width: '200px', borderRadius: '8px', display: 'block', margin: '0 auto' }} src={posterurl} alt={movie.title}/>{movie.title}</Link><button style={{padding:'3', border:'2px solid lightblue', borderRadius:'8px', margin:'5px'}} disabled={movieAlreadyInFavs(movie)} onClick={()=>handleButton(movie)}>{button}</button></div>
   ) 
}

export default MovieCard;