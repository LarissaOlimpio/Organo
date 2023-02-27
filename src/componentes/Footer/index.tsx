import ExternalLink from 'componentes/ExternalLink'
import styles from './Footer.module.css'


function Footer(){
    return(

        <footer className={styles.footer}>
            <section>
                <nav className={styles.navLink}>
                    <ExternalLink
                    link="https://www.instagram.com/aluraonline/"
                    img="assets/instagram.png"
                    description="Instagram icon"/>

                    <ExternalLink
                    link="https://www.facebook.com/AluraCursosOnline/"
                    img="assets/facebook.png"
                    description="Facebook icon"/>

                    <ExternalLink
                    link="https://twitter.com/aluraonline"
                    img="assets/twitter.png"
                    description="Twitter icon"/>
                </nav>
            </section>

            <section>
                 <img src="/assets/logo.png" alt="Logo Organo" />
            </section>

            <section className={styles.developer}>
                <p>
                    <ExternalLink
                    link="https://www.alura.com.br/"
                    text="Desenvolvido por Alura"/>
                    &
                    <ExternalLink
                    link="www.linkedin.com/in/larissaolimpio/"
                    text="Larissa Olimpio"/>
                </p>
            </section>
        </footer>
    )

}

export default Footer