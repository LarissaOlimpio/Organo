import { createContext, useState, useContext } from "react";

export const FavoriteContext = createContext();
FavoriteContext.displayName = "Favorite";

export default function FavoriteProvider({children}){
    const [favorite, setFavorite] = useState([]);

    return(

        <FavoriteContext.Provider value ={{favorite,setFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}
export function useFavoriteContext(){
    const {favorite,setFavorite} = useContext(FavoriteContext);

    function addFavorite(newFavorite){

        const repeatedFavorite = favorite.some(item => item.id === newFavorite.id)

        let newList = [...favorite];
        if(!repeatedFavorite){
            newList.push(newFavorite);
            return setFavorite(newList);
        }
        newList = favorite.filter((fav) => fav.id !==newFavorite.id);
        return setFavorite(newList);
    }
    return{
        favorite,
        addFavorite
    }
}

