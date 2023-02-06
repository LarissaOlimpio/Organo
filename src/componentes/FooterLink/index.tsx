import styles from './Footer.module.css'

interface FooterLinkProps{
    link: string
    img?: string
    description?:string
    text?: string
}
function FooterLink({link,img,description,text}:FooterLinkProps){
    return(
      
        <a className={styles.link} href={link} target="_blank" rel="noreferrer"> <img src={img} alt={description} /> {text} </a>         
        
    )
}
export default FooterLink