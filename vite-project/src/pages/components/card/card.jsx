import React from 'react';
import './card.css'
import { mockArray } from '../../../mocks/mock'
const Card = () => {
  return (
    <div className="card">
      <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/2-bandeira-do-brasil.jpg" alt="Bandeira do Brasil" />
      <div className="info">
        <h2>Brasil</h2>
      </div>
    </div>
  );
};

export default Card;