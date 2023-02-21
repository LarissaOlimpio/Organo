import Banner from "componentes/Banner";
import Container from "componentes/Container";
import Footer from "componentes/Footer";
import {Outlet} from "react-router-dom"

function BasePage(){
    return(

        <main>

            <Banner
            srcImage="/assets/banner.png"
            altText="Banner Image"/>
            
                <Container>
                    <Outlet/>
                </Container>
         

            <Footer/>

        </main>

    )
}

export default BasePage