import { useFavoriteContext } from 'componentes/context/Favorites'
import styles from'./Collaborator.module.css'
import iconFavorite from './iconFavorite.png'
import iconNotfavor from './iconNotfavor.png'


/*interface CollaboratorProps{
    name:string 
    image: string 
    position: string
    backgroundColor:string
    date :string
    id:string
   

}*/
//const Collaborator = ({ name,image,position,backgroundColor,date,id}:CollaboratorProps)
const Collaborator = ({ name,image,position,backgroundColor,date,id}) => {

    const {favorite, addFavorite} = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = !isFavorite ? iconFavorite : iconNotfavor;

    return (
        <div className={styles.collaborator}>
           
            <div className={styles.header} 
            style={{ backgroundColor: backgroundColor }}>
                <img  
                    className={styles.imgColaborator} 
                    src={image} 
                    alt={name}
                />
            </div>

            <div className={styles.footer}>
                
                <h4>{name}</h4>
                <h5>{position}</h5>
                <h5>{new Date(date).toLocaleDateString()}</h5>

                <img 
                    src={icon}
                    alt="Favorite Movie"
                    className={styles.favorite} 
                    onClick={() => {
                        addFavorite({ name,image,position,backgroundColor,date,id})}
                } />
               
                {/*toLocaleDateString analisa o idioma do navegador e forma a data conforme a localização */}

    
            </div>
        </div>
)}

export default Collaborator