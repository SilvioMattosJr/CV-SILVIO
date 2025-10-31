import React from 'react';

function CertificacaoItem(props) {
  const { nome, emissor, status } = props;

  return (
    <article className="certificacao-item">
      <h3>{nome}</h3>
      <p><strong>Emissor:</strong> {emissor}</p>
      <span className="status">{status}</span>
    </article>
  );
}

export default CertificacaoItem;