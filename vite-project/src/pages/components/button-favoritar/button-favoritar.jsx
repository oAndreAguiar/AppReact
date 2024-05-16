import React, { useState, useEffect } from 'react';
import './button-favoritar.css';





const BotaoFavoritar = ({time}) => {
    const [isClicked, setIsClicked] = useState(false);
    const [dados, setDados] = useState(null)
    console.log(time)

    // A chamada do 'POST' está sendo feito aqui, porém,
    // a chamada que eu faço nao salva

    // const postToMockApi = () => {
    //     fetch('https://63069afec0d0f2b8011f9944.mockapi.io/copa',
    //         {
    //             method: 'POST',
    //             body: {
        //                 createdAt: new Date(),
        //                 name: time.nome,
    //                     descricao: time.cor   
//                         copa: time.numeroCopas
    //                 

    //             }
    //         })
    //         .then((res) => res.json())
    //         .then(data => setDados(data))
    //         .then(console.log(dados))
    // }

    const handleClick = (event) => {
        setIsClicked(prevState => !prevState);
        postToMockApi()
    };

    return (
        <button
            style={{
                backgroundColor: isClicked ? 'blue' : '#4CAF50',
                border: 'none',
                color: 'white',
                padding: '15px 32px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                margin: '4px 2px',
                cursor: 'pointer',
                borderRadius: '8px',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                minWidth: '236px',

            }}
            className={`toggle-button ${isClicked ? 'clicked' : ''}`} onClick={(event) => handleClick(event)}>
            {isClicked ? 'Favoritado!' : 'Favorite esta Seleção!'}
        </button>
    );
};

export default BotaoFavoritar;
