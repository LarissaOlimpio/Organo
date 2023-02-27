import Banner from "componentes/Banner";
import Container from "componentes/Container";
import FavoriteProvider from "componentes/context/Favorites";
import Footer from "componentes/Footer";
import InternalLink from "componentes/InternalLink";
import {Outlet} from "react-router-dom"
import styles from './BasePage.module.css'

function BasePage(){
    return(

        <main>
              <nav className={styles.nav}>
                <InternalLink url="./">
                    Home
                </InternalLink>
                
                <InternalLink url="./favoritos">
                    Favoritos
                </InternalLink>
            </nav>
            <Banner
            srcImage="/assets/banner.png"
            altText="Banner Image"/>
          
            
            <FavoriteProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoriteProvider>

            <Footer/>

        </main>

    )
}

export default BasePage