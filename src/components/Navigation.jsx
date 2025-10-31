// src/components/Navigation.jsx

import React from 'react';
import {
  FaHome,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaCertificate,
  FaUser,
  FaFolderOpen
} from 'react-icons/fa';

function Navigation({ onNavClick, activeButton }) {
  const navItems = [
    { name: 'Início', icon: <FaHome />, section: 'home' },
    { name: 'Experiência', icon: <FaBriefcase />, section: 'experiencia' },
    { name: 'Formação', icon: <FaGraduationCap />, section: 'formacao' },
    { name: 'Habilidades', icon: <FaCode />, section: 'habilidades' },
    { name: 'Certificações', icon: <FaCertificate />, section: 'certificacoes' },
    { name: 'Sobre Mim', icon: <FaUser />, section: 'sobre-mim' },
    { name: 'Portfólio', icon: <FaFolderOpen />, section: 'portfolio-interactive' },  ];

  return (
    <nav className="main-navigation">
      {navItems.map((item) => (
        <button
          key={item.name}
          /* << APLICA A CLASSE 'nav-btn-active' SE O BOTÃO FOR O ATIVO >> */
          className={`nav-btn ${activeButton === item.name ? 'nav-btn-active' : ''}`}
          onClick={() => onNavClick(item.section, item.name)}
          title={item.name}
        >
          {item.icon}
          <span>{item.name}</span>
        </button>
      ))}
    </nav>
  );
}

export default Navigation;