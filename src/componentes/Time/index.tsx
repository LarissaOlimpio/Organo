import { ICollaborators } from 'shared/interfaces/ICollaborators'
import Collaborator from '../Collaborator'
import styles from './Time.module.css'


interface TimeProps{
    
    primaryColor: string
    secondaryColor:string
    name: string
    collaborators: ICollaborators[]
  
}
const Time = ({collaborators,primaryColor,secondaryColor,name }:TimeProps) => {
    
    
    return (
        (collaborators.length > 0) ? <section className={styles.time} style={{backgroundColor: secondaryColor}}>
            <h3 style={{ borderColor: primaryColor }}>
                {name}
            </h3>

            <div className={styles.collaborators}>

                {collaborators.map( collaborator =>{
                    //return para poder fazer algo dentro de cada loop
                    return <Collaborator 
                    backgroundColor={primaryColor} 
                     key={collaborator.id} 
                     id={collaborator.id}
                     name={collaborator.name} 
                     position={collaborator.position} 
                     image={collaborator.image}
                     date={collaborator.date}
                    
                     />
                }  )}
            </div>
        </section> 
        :<></> //retornamos um fragment para uniformizar os retornos
    )
}

export default Time