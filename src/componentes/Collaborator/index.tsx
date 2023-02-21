import {AiFillCloseCircle} from 'react-icons/ai'//ai são as primeiras duas letras do AiFillCloseCircle, sendo assim sabemos de qual pasta importar este ícone
import styles from'./Collaborator.module.css'


interface CollaboratorProps{
    name:string 
    image: string 
    position: string
    backgroundColor:string
    date :string
    whenDelete: any
    id:string
   

}
const Collaborator = ({ name,image,position,backgroundColor,date,whenDelete}:CollaboratorProps) => {

    return (
        <div className={styles.collaborator}>
            <AiFillCloseCircle 
                size={25}
                className={styles.delete} 
                onClick={() => whenDelete}
            />

            <div className={styles.header} 
            style={{ backgroundColor: backgroundColor }}>
                <img src={image} alt={name}/>
            </div>

            <div className={styles.footer}>
                <h4>{name}</h4>
                <h5>{position}</h5>
                <h5>{new Date(date).toLocaleDateString()}</h5>
                
                {/*toLocaleDateString analisa o idioma do navegador e forma a data conforme a localização */}]

    
            </div>
        </div>
)}

export default Collaborator