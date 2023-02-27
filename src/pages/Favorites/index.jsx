import Collaborator from "componentes/Collaborator";
import { useFavoriteContext } from "componentes/context/Favorites"
import Title from "componentes/Title"
import styles from './Favorites.module.css'

function Favorites(){
    const {favorite} = useFavoriteContext();
    return(
        <>
            
            <div className={styles.title}>
                <Title>
                    Favoritos
                </Title>
            </div>
            <section className={styles.container}>
               
                {favorite.map((fav)=>{
                    return <Collaborator {...fav} key={fav.id}/>
                })}
            </section>
        </>
    )

}

export default Favorites