import styles from './Title.module.css'


interface TitleProps{
    children: string 
}

function Title({children}:TitleProps){
    return(
        <h2 className={styles.title}>
            {children}
        </h2>
    )
}
export default Title