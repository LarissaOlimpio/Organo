import styles from './FooterLink.module.css'

interface FooterLinkProps{
    link: string
    img: string
    description:string
}
function FooterLink({link,img,description}:FooterLinkProps){
    return(
      
        <a href={link} target="_blank" rel="noreferrer"> <img src={img} alt={description} /> </a>         
        
    )
}
export default FooterLink