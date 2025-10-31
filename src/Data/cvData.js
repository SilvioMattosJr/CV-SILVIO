// src/data/cvData.js

export const cvData = {
  header: {
    nome: "SILVIO DONIZETI DE MATTOS JUNIOR",
    titulo: "Desenvolvedor Front-end Júnior | Técnico de TI",
    contato: {
      local: "Santos, SP",
      telefone: "(13) 99712-0499",
      email: "silvio.donizeti.jr@outlook.com",
      linkedin: "https://www.linkedin.com/in/silvio-mattos-a252602a3/",
      dataNascimento: "12/04/1999"
    }
  },

  sobreMim: {
    titulo: "Sobre Mim",
    fotoUrl: "", // << SUBSTITUA PELA URL DA SUA FOTO
    texto: "Sou um profissional apaixonado por tecnologia e inovação, com uma trajetória que combina suporte técnico especializado e desenvolvimento de soluções criativas. Minha transição para o Desenvolvimento Front-end é movida pela curiosidade e pelo desejo de construir interfaces que não apenas funcionem bem, mas que também proporcionem experiências memoráveis aos usuários. Fora do código, você me encontra explorando novas tecnologias, jogando ou curtindo um bom tempo com a família e amigos. Acredito que a melhor forma de crescer é compartilhando conhecimento e colaborando em projetos que façam a diferença."
  },

  resumoProfissional: "Profissional de TI com sólida experiência em suporte técnico, automação de processos e desenvolvimento de soluções inovadoras. Em transição de carreira para Desenvolvimento Front-end, com prática em HTML, CSS, JavaScript e React, e atualmente aprofundando conhecimentos na plataforma Salesforce. Possuo forte capacidade analítica para otimizar fluxos de trabalho, implementar melhorias e garantir a qualidade de software. Busco oportunidade para aplicar minha capacidade técnica e criativa, contribuindo para projetos de desenvolvimento e otimização, enquanto continuo aprimorando minhas habilidades em um ambiente dinâmico e desafiador.",

  portfolio: [
    {
      nome: "Password Vault V13",
      descricao: "Gerenciador de cofre de senhas pessoal desenvoldo para armazenar credenciais de forma segura. Focado em UX, segurança de dados e otimização de processos. A interface foi construída para ser intuitiva, permitindo que usuários de todos os níveis adicionem, editem e acessem suas senhas rapidamente.",
      tecnologias: ["HTML", "CSS", "JavaScript", "React"//, "Vite"
      ],
      linkDemo: "https://silviomattosjr.github.io/password-vault/Password%20Vault%20v13.1.html",
      linkRepositorio: "https://github.com/SilvioMattosJr/password-vault.git",
      // << ADICIONE O ARRAY DE IMAGENS >>
      imagens: [
        "mestra - light.jpg",
        "mestra - dark.jpg",
        "inicial - light.jpg",
        "inicial - dark.jpg",
        "senha - light.jpg",
        "menu - dark.jpg"
      ]
    },
    {
      nome: "Checklist Preventiva de TI",
      descricao: "Aplicativo web para gerenciar checklists de manutenção preventiva de equipamentos de TI. Permite criar, editar e acompanhar tarefas de manutenção, garantindo que todos os procedimentos sejam realizados de forma organizada e eficiente.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      linkDemo: "https://silviomattosjr.github.io/Checklist/",
      linkRepositorio: "https://github.com/SilvioMattosJr/Checklist.git",
      imagens: [
        "",
        ]
    }
    // ... adicione seus outros projetos
  ],
  
  experienciaProfissional: [
    {
      empresa: "Fenitti Consultoria e Desenvolvimento Tecnológico",
      local: "Santos, SP",
      cargo: "Técnico em Tecnologia e Desenvolvedor Front-end Júnior",
      periodo: "Mar/2024 – Presente",
      descricao: [
        "Desenvolvimento Front-end: Desenvolvi e maintive interfaces de usuário utilizando HTML, CSS e JavaScript, com implementações em React para componentes dinâmicos e interativos, visando a melhor experiência do usuário.",
        "Desenvolvimento de Ferramentas: Criei e desenvolvi o gerenciador de cofre pessoal 'Password Vault' (até a V10), focando em UX, segurança de dados e otimização de processos.",
        "Automação de Processos: Criei automações utilizando ferramentas No-code/Low-code (Google Apps Script) e scripts .bat para simplificar e acelerar tarefas repetitivas, aumentando a produtividade da equipe.",
        "Suporte Técnico e Infraestrutura: Prestei suporte técnico especializado (1º e 2º níveis), realizando manutenções preventivas e corretivas em hardware e software, configurando sistemas operacionais (Windows, Linux) e gerenciando ambientes de virtualização.",
        "Melhoria Contínua: Identifiquei e implementei melhorias em processos internos e na plataforma, resultando em maior eficiência, agilidade e qualidade na prestação de serviços."
      ]
    },
    {
      empresa: "Contele Soluções Tecnológicas",
      local: "Santos, SP",
      cargo: "Suporte Técnico da Plataforma Contele Fleet | QA Júnior",
      periodo: "Abr/2021 – Fev/2025",
      descricao: [
        "Suporte Técnico Especializado: Prestei suporte técnico especializado para usuários da plataforma Contele Fleet, garantindo alta taxa de resolução e satisfação do cliente.",
        "Qualidade de Software (QA): Executei testes de QA para atualizações da plataforma web e aplicativos móveis, assegurando a qualidade, funcionalidade das novas versões e prevenção de bugs.",
        "Análise de Dados: Desenvolvi dashboards intuitivos e informativos utilizando o Looker Studio para análise de dados e suporte à tomada de decisões estratégicas.",
        "Metodologias Ágeis: Implementei e gerenciei metodologias ágeis (Kanban e Scrum), criando quadros e estruturando sprints para otimizar fluxos de trabalho e aumentar a produtividade das equipes.",
        "Automação e Inovação: Desenvolvi automações básicas com ferramentas No-code/Low-code para otimizar o tempo dos funcionários e implementei ideias inovadoras para melhorar a experiência do usuário."
      ]
    },
    {
      empresa: "Inoserv Mão De Obras Especializada EIRELI",
      local: "Santos, SP",
      cargo: "Auxiliar de Limpeza (Carrefour)",
      periodo: "Nov/2020 – Jan/2021",
      descricao: []
    },
    {
      empresa: "Feira de Artesanato",
      local: "Santos, SP",
      cargo: "Atendente/Vendedor",
      periodo: "2012 – 2014",
      descricao: []
    }
  ],

  formacaoAcademica: [
    {
      instituicao: "Universidade Santa Cecília (Unisanta)",
      local: "Santos, SP",
      curso: "Formado em Gestão da Tecnologia da Informação",
      status: "Concluído",
      detalhes: [ // Agora é um array
        "Gestão Estratégica de TI",
        "Engenharia de Software",
        "Ética Profissional"
      ]
    },
    {
      instituicao: "ETEC Adolpho Berezin",
      local: "Mongaguá, SP",
      curso: "Técnico em Manutenção",
      status: "Concluído",
      detalhes: []
    },
    {
      instituicao: "ETEC Adolpho Berezin",
      local: "Mongaguá, SP",
      curso: "Suporte em Informática",
      status: "Concluído",
      detalhes: []
    }
  ],

  habilidadesTecnicas: {
    "Desenvolvimento Front-end": "HTML5, CSS3, JavaScript (ES6+), React (Básico/Intermediário).",
    "Automação e Scripts": "Google Apps Script, Automação No-code/Low-code, Scripts .bat.",
    "QA e Testes": "Testes de Software, Validação de Funcionalidades, Controle de Qualidade.",
    "Sistemas Operacionais": "Windows, Linux (Ubuntu, Linux Mint).",
    "Ferramentas": "Looker Studio (Data Studio), Pacote Office, Metodologias Ágeis (Scrum, Kanban).",
    "Idiomas": "Português (Nativo), Inglês (Intermediário).",
    "Em Aprendizagem": "Salesforce."
  },

  certificacoes: [
    { nome: "Profissional: TMR – Intelbras", emissor: "Intelbras", status: "Certificado" },
    { nome: "Curso Profissionalizante De Manutenção De Computadores", emissor: "Micro Vip", status: "Concluído" },
    { nome: "Técnica Nível Médio em Informática e Suporte em Manutenção", emissor: "ETEC Adolpho Berezin", status: "Concluído" },
    { nome: "Gestão Estratégica de TI, Engenharia de Software e Ética Profissional", emissor: "Universidade Santa Cecília (Unisanta)", status: "Concluído" },
    { nome: "Introdução a Python", emissor: "Santander Academy", status: "Concluído" }
  ]
};