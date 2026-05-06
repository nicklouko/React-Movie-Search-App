import {useState,useContext, createContext, useEffect} from 'react'

const FavouritesContext = createContext(null);

function FavouritesProvider({ children }){
    const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('favourites')) || []);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    return(
        <FavouritesContext.Provider value={{favourites, setFavourites}}>
            {children}
        </FavouritesContext.Provider>
    )
}

export default FavouritesProvider
export {FavouritesContext};
