import { Link } from "react-router-dom"
import styles from './InternalLink.module.css'

interface InternalLinkProps{
    url: string
    children:string
}
function InternalLink({url,children}:InternalLinkProps){
    return(
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}
export default InternalLink