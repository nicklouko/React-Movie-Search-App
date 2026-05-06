import { useParams } from "react-router-dom";
import { useContext } from "react";
import useFetch from '../hooks/useFetch'
import MovieCard from "../components/MovieCard";
import { FavouritesContext } from "../context/FavouritesContext.jsx"

function MovieDetails() {
    const { id } = useParams();
    const { favourites, setFavourites } = useContext(FavouritesContext);
    const { data, loading, error } = useFetch(`https://api.themoviedb.org/3/movie/${id}`);

    function handleAdd(movie) {
        setFavourites(favourites => [...favourites, { ...movie }])
    }

    return (
        <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
            {data && (
                <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
                    <MovieCard movie={data} button='Add to favourites' handleButton={handleAdd} />
                    <ul style={{ flex: 1, listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '10px' }}>
                        <li style={{ fontSize: '1rem', lineHeight: '1.7' }}>{data.overview}</li>
                        <li style={{ fontSize: '0.9rem', color: '#666' }}>{data.release_date}</li>
                        <li style={{ fontSize: '0.9rem', color: '#666' }}>⭐ {data.vote_average.toFixed(1)} out of {data.vote_count.toLocaleString()} reviews</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default MovieDetails;