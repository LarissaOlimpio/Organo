import styles from './Container.module.css'
import {ReactElement} from 'react'

interface ContainerProps{
    children: ReactElement
}
function Container({children}:ContainerProps){
    return(
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default Container