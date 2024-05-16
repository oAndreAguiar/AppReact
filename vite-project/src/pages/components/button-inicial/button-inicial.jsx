import '@emotion/react'
import { Link } from 'react-router-dom';
import './button-inicial.css'


const Botao = () => {
  return (
    <div className='button-inicial' >
        <Link className='link-botao-inicial' to="/pagina-principal">
          <button className='link-botao-inicial'>Entrar</button>
        </Link>
      
    </div>
  );
};

export default Botao;