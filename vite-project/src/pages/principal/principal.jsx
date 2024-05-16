import Card from '../components/card/card'
// import './principal.css'
import Navbar from '../components/navbar/navbar'
import { Link } from 'react-router-dom'
import { mockArray } from '../../mocks/mock'
import { useNavigate } from 'react-router-dom';



const Content = ({ label, dadoSelecao }) => {
    const navigateTo = useNavigate()

    const handleOnClick = () => {
        console.log('asdhiuashduiashduias')
        navigateTo(`/detalhes/${dadoSelecao.id}`)
    }

    return (
        <div style={{
            height: '80px',
            width: '120px',
            margin: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'lightgrey',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
        }}
            onClick={handleOnClick}>
            <div style={{ textAlign: 'center' }} >
                <h5>{dadoSelecao.id}</h5>
                <h3>{dadoSelecao.nome}</h3>

            </div>
        </div>
    )
}

function LabelBox({ label, times }) {
   return(
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
        <h2 style={{
            marginTop: '10px',
            marginBottom: '20px',
        }}> {label}</h2>

        <div style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            {times.map((item, index) => (
                <Content dadoSelecao={item} key={index} />
            ))}
        </div>

    </div>
    )
}

function Principal() {

    return (
        <div >
            <Navbar />
            {mockArray.map((grupo, index) => {
                console.log(grupo)
                return <LabelBox label={grupo.nomeDoGrupo} times={grupo.times} key={index} />

            }
            )}
            Botao
        </div>
    )
}

export default Principal