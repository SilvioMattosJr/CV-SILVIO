// src/components/ExperienciaProfissional/ExperienciaProfissional.jsx

import React from 'react';
import { cvData } from '../../Data/cvData'; // Atente ao caminho! Agora precisamos subir dois níveis.
import ExperienciaItem from './ExperienciaItem'; // Importamos o componente "molde"

function ExperienciaProfissional() {
  // Pegamos o array completo de experiências do nosso objeto de dados.
  const { experienciaProfissional } = cvData;

  return (
    <section className="experiencia-section">
      <h2>Experiência Profissional</h2>
      <div className="experiencia-list">
        {/*
          A MÁGICA ACONTECE AQUI!
          1. Usamos .map() no array 'experienciaProfissional'.
          2. Para cada 'exp' (um objeto de experiência no array)...
          3. ...retornamos um componente <ExperienciaItem />.
          4. Passamos os dados de 'exp' como props para o componente.
          5. A 'key' é ESSENCIAL para o React. Deve ser única. Usaremos o nome da empresa como chave.
        */}
        {experienciaProfissional.map((exp) => (
          <ExperienciaItem
            key={exp.empresa} // Chave única para o React identificar este item na lista
            empresa={exp.empresa}
            local={exp.local}
            cargo={exp.cargo}
            periodo={exp.periodo}
            descricao={exp.descricao}
          />
        ))}
      </div>
    </section>
  );
}

export default ExperienciaProfissional;