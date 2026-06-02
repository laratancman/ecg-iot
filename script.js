const translations = {
  pt: {
    title: "ECG Portátil de Baixo Custo",
    subtitle: "Monitoramento cardíaco remoto utilizando ESP32 e IoT",
    aboutTitle: "O Projeto: ECG de Baixo Custo Utilizando IoT",
    aboutText: "O projeto ECG tem como objetivo desenvolver um eletrocardiograma portátil e acessível, ideal para uso domiciliar, utilizando tecnologia baseada em Internet das Coisas (IoT). A iniciativa foi criada para superar barreiras no acesso a exames cardíacos, especialmente em populações de baixa renda, pessoas com mobilidade reduzida ou que enfrentam dificuldades de deslocamento até centros de saúde.\n\nEste sistema combina eletrônica de baixo custo com conectividade sem fio, permitindo que dados cardíacos sejam coletados continuamente e compartilhados de forma segura com profissionais de saúde, facilitando o monitoramento remoto da atividade elétrica do coração e a detecção precoce de possíveis irregularidades.",
    howTitle: "Tecnologia: Como é feito o ECG?",
    howText: "O MAX30100 coleta os sinais cardíacos e o ESP32 envia os dados via Wi-Fi.",
    archTitle: "🌐 Arquitetura IoT",
    archText: "Paciente → MAX30100 → ESP32 → Internet → Médico",
    contactTitle: "📬 Contato",
    contactText: "Email: seuemail@exemplo.com",
    footerText: "© 2026 – ECG Portátil com IoT. Todos os direitos reservados."
  },

  en: {
    title: "Low-Cost Portable ECG",
    subtitle: "Remote heart monitoring using ESP32 and IoT",
    aboutTitle: "📌 About the Project",
    aboutText: "This project develops a portable heart monitoring system based on ESP32 and the MAX30100 sensor.",
    howTitle: "⚙️ How It Works",
    howText: "The MAX30100 collects heart data and the ESP32 sends it via Wi-Fi.",
    archTitle: "🌐 IoT Architecture",
    archText: "Patient → MAX30100 → ESP32 → Internet → Doctor",
    contactTitle: "📬 Contact",
    contactText: "Email: yourmail@example.com",
    footerText: "© 2026 – ECG Portable with IoT. All rights reserved."
  },

  es: {
    title: "ECG Portátil de Bajo Costo",
    subtitle: "Monitoreo cardíaco remoto usando ESP32 e IoT",
    aboutTitle: "📌 Sobre el Proyecto",
    aboutText: "Este proyecto desarrolla un sistema portátil de monitoreo cardíaco basado en ESP32 y el sensor MAX30100.",
    howTitle: "⚙️ Cómo Funciona",
    howText: "El MAX30100 recopila datos cardíacos y el ESP32 los envía por Wi-Fi.",
    archTitle: "🌐 Arquitectura IoT",
    archText: "Paciente → MAX30100 → ESP32 → Internet → Médico",
    contactTitle: "📬 Contacto",
    contactText: "Correo: tumail@ejemplo.com",
    footerText: "© 2026 – ECG Portátil con IoT. Todos los derechos reservados."
  }
};

window.setLanguage = function (lang) {
  const elements = {
    "title": "title",
    "subtitle": "subtitle",
    "about-title": "aboutTitle",
    "about-text": "aboutText",
    "how-title": "howTitle",
    "how-text": "howText",
    "arch-title": "archTitle",
    "arch-text": "archText",
    "contact-title": "contactTitle",
    "contact-text": "contactText",
    "footer-text": "footerText"
  };

  for (const id in elements) {
    const el = document.getElementById(id);
    if (el) {
      el.innerText = translations[lang][elements[id]];
    }
  }
};

const profiles = {
  lara: {
    name: "Lara Tancman",
    role: "Auxiliar de TI",
    img: "imgs/lara.jpeg",
    bio: "Graduanda em Análise e Desenvolvimento de Sistemas pelo IFSC - Instituto Federal de Santa Catarina - Câmpus Gaspar, com formação técnica pelo SESI e certificação em Inteligência Artificial pelo programa Entra21. Possuo conhecimentos em programação, informática intermediária e inglês avançado. Destaca-se pela boa comunicação, trabalho em equipe, organização e busca constante por evolução, com objetivo de crescer e se desenvolver na área de Tecnologia da Informação.",
    linkedin: "https://www.linkedin.com/in/lara-tancman-687b64289/",
    github: "https://github.com/laratancman"
  },
  helo: {
    name: "Heloíse Kisner",
    role: "Analista Junior",
    img: "imgs/helo.jpeg",
    bio: "Iniciei minha jornada profissional como jovem aprendiz na Unifique, onde desenvolvi habilidades em atendimento ao cliente no setor comercial, fortalecendo minha comunicação e relacionamento interpessoal. Posteriormente, atuei como jovem aprendiz na Viveo, no setor de Segurança do Trabalho, sendo responsável pela elaboração de PPPs, lançamentos de treinamentos no sistema Sênior, elaboração do DDS semanal, controle de planilhas de acidentes e geração de relatórios gerenciais. Também participei do projeto de ECG, contribuindo de forma ativa nas pesquisas, levantamento e organização de informações essenciais para o desenvolvimento do projeto.",
    linkedin: "https://www.linkedin.com/in/helo%C3%ADse-kisner-07h/",
  },
  marcio: {
    name: "Marcio Schoenfelder",
    role: "Professor • Desenvolvimento de Sistemas",
    img: "imgs/marcio.jpeg",
    bio: "Analista de Sistemas e Negócios por formação, com mais de 29 anos de atuação em empresa privada na área de desenvolvimento de sistemas.Mais de 45 anos de vivência com programação e desenvolvimento de sistemas.Atuo como professor do Ensino Técnico no SENAI, Ensino Médio na Escola SESI, como Instrutor nos programas ENTRA21 e +DEVS2BLU e como orientador em.projetos de inovação em TI. Pós-graduado em: - Gestão Escolar. - Desenvolvimento de Sistemas em JAVA. - Tecnologia da Informação na Gestão de Negócios.- Gestão de Processos. Certificado SCRUM.",
    github: "https://github.com/marcioscbnu"
  },
  diego: {
    name: "Diego Carlos de Aguiar",
    role: "Professor • Eletrônica",
    img: "imgs/diego.jpeg",
    bio: "Sou formado em Análise e desenvolvimento de Sistemas desde 2018 e Sistemas para Internet desde 2016, sou pós graduado em Engenharia Elétrica ,engenharia eletrônica atualmente mestrando em engenharia elétrica com ênfase em eletrônica de potência pela FURB. Sou desenvolvedor de sistemas para IOT, desde a programação, circuitos elétricos, e desenvolvimento de placas para teste. Sou professor de na área de desenvolvimento de sistemas, elétrica e eletrônica já atuei nas unidades do Senai de Brusque ,São João Batista e Tijucas e atualmente no Senai de Blumenau, trabalho como professor na área de engenharia elétrica para a Uniasselvi. Sou extremamente dedicado a tudo que faço, e procuro melhorar e aprender cada vez mais.",
    linkedin: "https://www.linkedin.com/in/diego-carlos-de-aguiar86/",
  }
};

function openProfile(id) {
  const p = profiles[id];
  document.getElementById("profile-img").src = p.img;
  document.getElementById("profile-name").innerText = p.name;
  document.getElementById("profile-role").innerText = p.role;
  document.getElementById("profile-bio").innerText = p.bio;
  document.getElementById("profile-linkedin").href = p.linkedin;
  document.getElementById("profile-github").href = p.github;
  document.getElementById("profile-modal").style.display = "flex";
}

function closeProfile() {
  document.getElementById("profile-modal").style.display = "none";
}


setLanguage("pt");
