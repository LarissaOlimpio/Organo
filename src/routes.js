import { BrowserRouter, Routes, Route} from "react-router-dom"
import Favorites from "pages/Favorites"
import NotFound from "pages/NotFound"
import Start from "pages/Start/Start"
import BasePage from "pages/BasePage"

function AppRoutes(){
 
    return(

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<BasePage/>}>

                    <Route index element={<Start/>}></Route>

                    <Route path="/favoritos" element={<Favorites/>}></Route>
                    
                    <Route path="*"element={<NotFound/>} ></Route>
                    
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes