// src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Importa o componente principal da aplicação
// 1. Encontra o elemento HTML onde a aplicação será "montada"
const root = ReactDOM.createRoot(document.getElementById('root'))

// 2. Renderiza o componente App dentro desse elemento
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)