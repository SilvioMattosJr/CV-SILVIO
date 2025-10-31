import React from 'react';

function FormacaoItem(props) {
  // As "props" são um objeto com todos os atributos que passarmos para o componente.
  // Ex: <ExperienciaItem empresa="Fenitti" cargo="Dev" />
  // O objeto props será: { empresa: "Fenitti", cargo: "Dev" }

  // Usamos "destructuring" para extrair as propriedades do objeto props de forma limpa.
  const { instituicao, local, curso, status, detalhes } = props;

  return (
    <article className="formacao-item">
      <header className="formacao-header">
        <h3>{curso}</h3>
        <h4>{instituicao} | {local}</h4>
        <span className="status">{status}</span>
      </header>
      <ul>
        {/* 
          Mapeamos o array de descrição para criar uma lista <li> para cada item.
          Usamos o índice (index) como key, que é uma prática comum para listas simples.
        */}
        {detalhes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default FormacaoItem;