import { Routes, Route } from "react-router-dom";
import Inicial from "./pages/inicial/inicial";
import Principal from "./pages/principal/principal";
import Detalhes from "./pages/detalhes/detalhes";


function MainRoutes(){
    return(
        <Routes>
            
            <Route path="/" element={<Inicial/>}/>
            <Route path="/pagina-principal" element={<Principal/>}/>
            <Route path="/detalhes/:id" element={<Detalhes/>}/>
        </Routes>
    )
}

export  default MainRoutes

