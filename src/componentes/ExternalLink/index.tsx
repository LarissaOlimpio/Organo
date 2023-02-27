import styles from './ExternalLink.module.css'

interface ExternalLinkProps{
    link: string
    img?: string
    description?:string
    text?: string
}
function ExternalLink({link,img,description,text}:ExternalLinkProps){
    return(
      
        <a className={styles.link} href={link} target="_blank" rel="noreferrer"> <img src={img} alt={description} /> {text} </a>         
        
    )
}
export default ExternalLink