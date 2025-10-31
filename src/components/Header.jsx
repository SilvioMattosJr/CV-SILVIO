import React from 'react';
import { cvData } from '../Data/cvData'; 

function Header() {
  const { header } = cvData;

  return (
    <header className="cv-header">
      <h1>{header.nome}</h1>
      <h2>{header.titulo}</h2>
      <div className="contact-info">
        <p>{header.contato.local}</p>
        <p>{header.contato.telefone}</p>
        <p>{header.contato.email}</p>
        <p>
          <a href={header.contato.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
            LinkedIn: Silvio Mattos
          </a>
        </p>
        <p>{header.contato.dataNascimento}</p>
      </div>
    </header>
  );
}

export default Header;