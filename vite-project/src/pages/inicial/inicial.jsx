import { Link } from "react-router-dom";
import './inicial.css';
import Botao from "../components/button-inicial/button-inicial";



function Inicial(){
    return(
        <> 
        <p style={{textAlign:'center'}}>Avaliação Raeact T4me - André Aguiar</p>
        <div className="components-home">
            <img style={{width:'500px', marginTop:'20px'}} className='image-home' src="https://upload.wikimedia.org/wikipedia/pt/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png" alt="" />
            <Botao/>
        </div>
        </>
    )
}

export default Inicial;