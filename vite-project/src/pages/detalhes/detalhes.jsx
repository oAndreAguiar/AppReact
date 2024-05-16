import Card from '../components/card/card'
// import './principal.css'
import Navbar from '../components/navbar/navbar'
import { Link } from 'react-router-dom'
import { mockArray } from '../../mocks/mock'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import BotaoFavoritar from '../components/button-favoritar/button-favoritar'



function Detalhes() {


    const { id } = useParams();

    function findTeamById() {
        for (const grupo of mockArray) {
            const times = grupo.times;
            const timeEncontrado = times.find(time => time.id === id);
            if (timeEncontrado) {
                return timeEncontrado;
            }
        }
        return null;
    }





    const [time, setTime] = useState(findTeamById())
    console.log(time)
    if (!time) {
        return (
            <div>Time não encontrado</div>
        )
    }

    return (
        <>
            <Navbar />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center',
                flexDirection: 'column',
                width:'100%',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20px'
                }} >
                    <div style={{ border: '2px solid #ccc', borderRadius: '8px', padding: '20px', width: '300px', textAlign: 'center' }}>
                        <h3 style={{ marginBottom: '10px' }}>{time.nome}</h3>
                        <div style={{ backgroundColor: time.cor, padding: '5px', borderRadius: '4px', marginBottom: '10px' }}>Cor: {time.cor}</div>
                        <h3 style={{ marginBottom: '10px' }}>Número de Copas: {time.numeroCopas}</h3>
                    </div>
                </div>
                <div>
                    <BotaoFavoritar time={time} />
                </div>
            </div>
        </>
    )
}

export default Detalhes