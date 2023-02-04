import styles from'./Collaborator.module.css'

interface CollaboratorProps{
    name:string 
    image: string 
    position: string
    backgroundColor:string
    date :string

}
const Collaborator = ({ name,image,position,backgroundColor,date}:CollaboratorProps) => {

    return (
        <div className={styles.collaborator}>
            <div className={styles.header} 
            style={{ backgroundColor: backgroundColor }}>
                <img src={image} alt={name}/>
            </div>

            <div className={styles.footer}>
                <h4>{name}</h4>
                <h5>{position}</h5>
                <h5>{new Date(date).toLocaleDateString()}</h5>
            </div>
        </div>
)}

export default Collaborator