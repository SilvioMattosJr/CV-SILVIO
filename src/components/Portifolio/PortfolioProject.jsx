// src/components/Portfolio/PortfolioProject.jsx

import React, { useState, useEffect } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaExternalLinkAlt,
  FaGithub
} from 'react-icons/fa';

//import ViteLogo from '../../assets/portfolio/vite-logo.svg';


// Função para mapear nomes de tecnologias a ícones
const getTechIcon = (tech) => {
  const icons = {
    'HTML': <FaHtml5 />,
    'CSS': <FaCss3Alt />,
    'JavaScript': <FaJs />,
    'React': <FaReact />,
    //'Vite': <ViteLogo />,
  };
  return icons[tech] || null;
};

// << NOVO: Mapeamento de tecnologias para suas URLs oficiais >>
const getTechUrl = (tech) => {
  const urls = {
    'HTML': 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    'CSS': 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
    'JavaScript': 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    'React': 'https://react.dev/',
  };
  return urls[tech] || '#'; // Retorna '#' se não houver URL
};

function PortfolioProject({ nome, descricao, tecnologias, linkDemo, linkRepositorio, imagens: imageFilenames }) {
  const [loadedImages, setLoadedImages] = useState([]);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = import.meta.glob('/src/assets/portfolio/*');
      const urls = await Promise.all(
        imageFilenames.map(async (filename) => {
          const path = `/src/assets/portfolio/${filename}`;
          try {
            const module = await imageModules[path]();
            return module.default;
          } catch (error) {
            console.error(`Imagem não encontrada: ${path}.`);
            return null;
          }
        })
      );
      setLoadedImages(urls);
    };
    loadImages();
  }, [imageFilenames]);

  const handleImageSwap = (clickedIndex) => {
    if (clickedIndex === mainImageIndex) return;
    const newImages = [...loadedImages];
    const temp = newImages[mainImageIndex];
    newImages[mainImageIndex] = newImages[clickedIndex];
    newImages[clickedIndex] = temp;
    setLoadedImages(newImages);
  };

  return (
    <div 
      className="project-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <h3 className="project-title">{nome}</h3>
      
      <div className="main-card">
        {loadedImages[mainImageIndex] ? (
          <img src={loadedImages[mainImageIndex]} alt={`Imagem principal do projeto ${nome}`} />
        ) : (
          <div style={{ width: '100%', height: '100%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
            Imagem não encontrada
          </div>
        )}
      </div>

      {/* << NOVO: Card de Tecnologias (Cima) >> */}
      <div className={`secondary-card tech-card ${isHovering ? 'visible' : ''}`}>
        <div className="tech-icons">
          {tecnologias.map((tech, index) => (
            // << NOVO: Ícones agora são links clicáveis >>
            <a key={index} href={getTechUrl(tech)} target="_blank" rel="noopener noreferrer" title={tech}>
              {getTechIcon(tech)}
            </a>
          ))}
        </div>
        <div className="project-links">
          {linkDemo && <a href={linkDemo} target="_blank" rel="noopener noreferrer" title="Ver Demo"><FaExternalLinkAlt /></a>}
          {linkRepositorio && <a href={linkRepositorio} target="_blank" rel="noopener noreferrer" title="Ver Código"><FaGithub /></a>}
        </div>
      </div>

      {/* Card de Informações (Esquerda) - Agora só com a descrição */}
      <div className={`secondary-card info-card ${isHovering ? 'visible' : ''}`}>
        <p>{descricao}</p>
      </div>

      {/* Cards de Imagem Secundárias (Direita) */}
      {loadedImages.slice(1).map((img, index) => {
        const realIndex = index + 1;
        if (!img) return null;

        return (
          <div
            key={realIndex}
            className={`secondary-card image-card image-card-${realIndex} ${isHovering ? 'visible' : ''}`}
            onClick={() => handleImageSwap(realIndex)}
          >
            <img src={img} alt={`Imagem secundária ${realIndex} do projeto ${nome}`} />
          </div>
        );
      })}
    </div>
  );
}

export default PortfolioProject;