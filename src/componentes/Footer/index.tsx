import FooterLink from 'FooterLink'
import styles from './Footer.module.css'


function Footer(){
    return(

        <footer className={styles.footer}>
            <section>
                <nav>
                    <FooterLink
                    link="https://www.instagram.com/aluraonline/"
                    img="assets/instagram.png"
                    description="Instagram icon"/>

                    <FooterLink
                    link="https://www.facebook.com/AluraCursosOnline/"
                    img="assets/facebook.png"
                    description="Facebook icon"/>

                    <FooterLink
                    link="https://twitter.com/aluraonline"
                    img="assets/twitter.png"
                    description="Twitter icon"/>
                </nav>
            </section>

            <section>
                 <img src="/assets/logo.png" alt="Logo Organo" />
            </section>

            <section>
                <p>Desenvolvido por <a href="https://www.alura.com.br/" target="_blank" rel="noreferrer">Alura</a> & <a href="https://www.linkedin.com/in/larissaolimpio/" target="_blank" rel="noreferrer">Larissa Olimpio</a></p>
            </section>
        </footer>
    )

}

export default Footer