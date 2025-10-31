// src/components/AnimatedBackground.jsx

import React, { useEffect, useRef } from 'react';

function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Configurações da animação (você pode ajustar estes valores)
    const particleCount = 150;
    const connectionDistance = 150;
    const particleSpeed = 0.3;
    let particles = [];
    let animationId;

    // Classe para representar cada partícula
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * particleSpeed;
        this.vy = (Math.random() - 0.5) * particleSpeed;
        this.radius = Math.random() * 2 + 1;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
        
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        // Pega a cor da partícula das variáveis CSS do tema
        const particleColor = getComputedStyle(document.body)
          .getPropertyValue('--container-bg').trim();
        
        ctx.fillStyle = particleColor;
        ctx.fill();
      }
    }
    
    // Função para inicializar as partículas
    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    
    // Função para conectar partículas próximas
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            const opacity = 1 - (distance / connectionDistance);
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Pega a cor da linha das variáveis CSS do tema
            const lineColor = getComputedStyle(document.body)
              .getPropertyValue('--line').trim();
            
            ctx.strokeStyle = lineColor.replace('opacity', opacity * 0.5);
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };
    
    // Função principal de animação
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      animationId = requestAnimationFrame(animate);
    };
    
    // Função para redimensionar o canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(); // Re-inicializa as partículas ao redimensionar
    };
    
    // Configuração inicial
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
    
    // Limpeza: remove o event listener e cancela a animação ao desmontar o componente
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []); // O array vazio garante que o useEffect rode apenas uma vez

  return <canvas ref={canvasRef} className="animated-background" />;
}

// << ESTA É A LINHA MAIS IMPORTANTE! >>
export default AnimatedBackground;