// src/components/Portfolio/Portfolio.jsx

import React from 'react';
import { cvData } from '../../Data/cvData';
import PortfolioProject from './PortfolioProject'; // << IMPORTAR O NOVO COMPONENTE

function Portfolio() {
  const { portfolio } = cvData;

  return (
    <section className="portfolio-section">
      <h2>Meu Portfólio</h2>
      <div className="portfolio-list">
        {portfolio.map((projeto) => (
          <PortfolioProject
            key={projeto.nome}
            nome={projeto.nome}
            descricao={projeto.descricao}
            tecnologias={projeto.tecnologias}
            linkDemo={projeto.linkDemo}
            linkRepositorio={projeto.linkRepositorio}
            imagens={projeto.imagens}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;