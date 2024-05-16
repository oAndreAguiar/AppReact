import ReactDOM from 'react-dom/client';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom'; // Correção aqui
import Inicial from './pages/inicial/inicial';
import Principal from './pages/principal/principal';
// import Detalhes from './pages/detalhes/detalhes';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRoutes/> 
  </BrowserRouter>
)
