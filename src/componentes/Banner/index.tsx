import styles from './Banner.module.css'

interface BannerProps{
    srcImage: string
    altText: string 
    //se colocar o ? antes do : se torna opicional o altText
}

function Banner({srcImage, altText}:BannerProps){
    return(
        <header className={styles.Banner}>
            
            <img src={srcImage} alt={altText} />
         
        </header>
    )
}

export default Banner