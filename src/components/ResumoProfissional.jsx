// src/components/ResumoProfissional.jsx

import React from 'react';
import { cvData } from '../Data/cvData'; // <-- Verifique o caminho

function ResumoProfissional() {
  const { resumoProfissional } = cvData;

  return (
    <section className="resumo-section">
      <h2>Resumo Profissional</h2>
      <p>{resumoProfissional}</p>
    </section>
  );
}

export default ResumoProfissional;