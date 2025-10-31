// src/components/ExperienciaProfissional/ExperienciaItem.jsx

import React from 'react';
import ExperienciaProfissional from './ExperienciaProfissional';

function ExperienciaItem(props) {
  // As "props" são um objeto com todos os atributos que passarmos para o componente.
  // Ex: <ExperienciaItem empresa="Fenitti" cargo="Dev" />
  // O objeto props será: { empresa: "Fenitti", cargo: "Dev" }

  // Usamos "destructuring" para extrair as propriedades do objeto props de forma limpa.
  const { empresa, local, cargo, periodo, descricao } = props;

  return (
    <article className="experiencia-item">
      <header className="experiencia-header">
        <h3>{cargo}</h3>
        <h4>{empresa} | {local}</h4>
        <span className="periodo">{periodo}</span>
      </header>
      <ul>
        {/* 
          Mapeamos o array de descrição para criar uma lista <li> para cada item.
          Usamos o índice (index) como key, que é uma prática comum para listas simples.
        */}
        {descricao.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienciaItem;