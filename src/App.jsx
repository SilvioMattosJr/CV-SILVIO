// src/App.jsx

import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import PortfolioInteractive from './components/Portifolio/Portfolio';
import Header from './components/Header';
import ResumoProfissional from './components/ResumoProfissional';
import ExperienciaProfissional from './components/ExperienciaProfissional/ExperienciaProfissional';
import FormacaoAcademica from './components/FormacaoAcademica/FormacaoAcademica';
import HabilidadesTecnicas from './components/HabilidadesTecnicas';
import Certificacoes from './components/Certificacoes/Certificacoes';
import SobreMim from './components/SobreMim/SobreMim';
import { cvData } from './Data/cvData'; 
import './styles/global.css';

function App() {
  // --- LÓGICA DO TEMA (sem mudanças) ---
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  // --- LÓGICA DE NAVEGAÇÃO (MELHORADA) ---
  const [activeSection, setActiveSection] = useState('home');
  
  // << NOVO: Estado para controlar qual botão de navegação está expandido >>
  const [activeNavButton, setActiveNavButton] = useState('Início');

  // << NOVO: Função unificada para clique na navegação >>
  const handleNavClick = (section, buttonName) => {
    setActiveSection(section);
    setActiveNavButton(buttonName);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'experiencia':
        return <ExperienciaProfissional {...cvData} />;
      case 'formacao':
        return <FormacaoAcademica {...cvData} />;
      case 'habilidades':
        return <HabilidadesTecnicas {...cvData} />;
      case 'certificacoes':
        return <Certificacoes {...cvData} />;
      case 'sobre-mim':
        return <SobreMim  {...cvData} />;
      case 'portfolio-interactive':
        return <PortfolioInteractive />;
      case 'home':
      default:
        return (
          <>
            <Header {...cvData} />
            <ResumoProfissional {...cvData} />
          </>
        );
    }
  };

  return (
    <>
      <AnimatedBackground />

      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>

      {/* << PASSANDO A NOVA INFORMAÇÃO PARA O COMPONENTE DE NAVEGAÇÃO >> */}
      <Navigation 
        onNavClick={handleNavClick} 
        activeButton={activeNavButton} 
      />

      <div className="cv-container">
        <main className="content-area">
          <div key={activeSection} className="content-wrapper">
            {renderContent()}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;