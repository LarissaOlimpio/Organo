import { createContext,useState } from "react";

//Criando contexto
export const FavoriteContext = createContext();
FavoriteContext.displayName="Favorite";

//função que vou exportar aqui e importar na BasePage
export default function FavoriteProvider({children}){
    const [favorite, setfavorite] =useState([]);

    return(
        <FavoriteContext.Provider
         value={{favorite,setfavorite}}>
            {children}
        </FavoriteContext.Provider>

    )

}