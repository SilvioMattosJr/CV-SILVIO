// src/components/HabilidadesTecnicas.jsx

import React from 'react';
import { cvData } from '../Data/cvData';

function HabilidadesTecnicas() {
  const { habilidadesTecnicas } = cvData;

  return (
    <section className="habilidades-section">
      <h2>Habilidades Técnicas</h2>
      <div className="habilidades-list">
        {/*
          A MÁGICA ACONTECE AQUI!
          1. Object.entries(habilidadesTecnicas) transforma o objeto em um array de [chave, valor].
          2. Usamos .map() nesse novo array.
          3. Para cada par ([categoria, habilidades]), extraímos os valores com destructuring.
          4. A chave do React agora é a 'categoria', que é única.
        */}
        {Object.entries(habilidadesTecnicas).map(([categoria, habilidades]) => (
          <div key={categoria} className="habilidade-item">
            <h3>{categoria}</h3>
            <p>{habilidades}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HabilidadesTecnicas;