
import { ICollaborators } from 'shared/interfaces/ICollaborators'
import Collaborator from '../Collaborator'
import styles from './Time.module.css'
import {v4 as uuidv4} from 'uuid'

interface TimeProps{
    
    primaryColor: string
    secondaryColor:string
    name: string
    collaborators: ICollaborators[]
    whenDelete: any
  
    
}
const Time = ({collaborators,primaryColor,secondaryColor,name,whenDelete }:TimeProps) => {
    
    
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
                     id={uuidv4()}
                     name={collaborator.name} 
                     position={collaborator.position} 
                     image={collaborator.image}
                     date={collaborator.date}
                     whenDelete={whenDelete}
                    
                     />
                }  )}
            </div>
        </section> 
        :<></> //retornamos um fragment para uniformizar os retornos
    )
}

export default Time