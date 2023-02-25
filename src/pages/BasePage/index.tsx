import Banner from "componentes/Banner";
import Container from "componentes/Container";
import FavoriteProvider from "componentes/context/Favorites";
import Footer from "componentes/Footer";
import {Outlet} from "react-router-dom"

function BasePage(){
    return(

        <main>

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