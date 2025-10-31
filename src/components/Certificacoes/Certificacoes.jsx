import React from 'react';
import { cvData } from '../../Data/cvData';
import CertificacaoItem from './CertificacaoItem'; // <-- NOME CORRETO

function Certificacoes() {
  const { certificacoes } = cvData;

  return (
    <section className="certificacoes-section">
      <h2>Certificações e Cursos Complementares</h2>
      <div className="certificacoes-list">
        {certificacoes.map((cert) => (
          <CertificacaoItem // <-- NOME CORRETO
            key={cert.nome}
            nome={cert.nome}
            emissor={cert.emissor}
            status={cert.status}
          />
        ))}
      </div>
    </section>
  );
}

export default Certificacoes;