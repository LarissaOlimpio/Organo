import { ICollaborators } from '../../shared/interfaces/ICollaborators'
import Collaborator from '../Collaborator'
import styles from './Time.module.css'

interface TimeProps{
    
    primaryColor: string
    secondaryColor:string
    name: string
    collaborators: ICollaborators[]
    
}
const Time = ({collaborators,primaryColor,secondaryColor,name}:TimeProps) => {
    
    return (
        (collaborators.length > 0) ? <section className={styles.time} style={{backgroundColor: secondaryColor}}>
            <h3 style={{ borderColor: primaryColor }}>
                {name}
            </h3>

            <div className={styles.collaborators}>
                {collaborators.map( collaborator => <Collaborator 
                backgroundColor={primaryColor}
                 key={collaborator.name} 
                 name={collaborator.name} 
                 position={collaborator.position} 
                 image={collaborator.image}/> )}
            </div>
        </section> 
        : ''
    )
}

export default Time