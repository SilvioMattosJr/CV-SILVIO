// src/components/SobreMim/SobreMimItem.jsx

import React from 'react';

// << 1. IMPORTE A SUA IMAGEM AQUI >>
// Ajuste o caminho se o nome do arquivo for diferente
import minhaFoto from '../../assets/images/minha-foto.jpg'; 

function SobreMimItem({ titulo, texto }) {
  return (
    <section className="sobre-mim-item">
      <div className="sobre-mim-content">
        <div className="sobre-mim-text">
          <h2>{titulo}</h2>
          <p>{texto}</p>
        </div>
        {/* O bloco da foto agora sempre aparece, pois a imagem é local */}
        <div className="sobre-mim-foto">
          {/* << 2. USE A VARIÁVEL IMPORTADA NO ATRIBUTO src >> */}
          <img src={minhaFoto} alt="Foto de perfil de Silvio Mattos" />
        </div>
      </div>
    </section>
  );
}

export default SobreMimItem;