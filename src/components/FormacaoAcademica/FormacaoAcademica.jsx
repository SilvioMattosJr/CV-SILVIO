// src/components/FormacaoAcademica/FormacaoAcademica.jsx

// ESTE ARQUIVO PERMANECE EXATAMENTE O MESMO!

import React from 'react';
import { cvData } from '../../Data/cvData';
import FormacaoItem from './FormacaoItem';

function FormacaoAcademica() {
  const { formacaoAcademica } = cvData;

  return (
    <section className="formacao-section">
      <h2>Formação Acadêmica</h2>
      <div className="formacao-list">
        {formacaoAcademica.map((formacao) => (
          <FormacaoItem
            key={`${formacao.instituicao}-${formacao.curso}`}
            instituicao={formacao.instituicao}
            curso={formacao.curso}
            local={formacao.local}
            status={formacao.status}
            detalhes={formacao.detalhes} // Apenas passa os dados adiante
          />
        ))}
      </div>
    </section>
  );
}

export default FormacaoAcademica;