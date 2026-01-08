const translations = {
  pt: {
    title: "ECG Portátil de Baixo Custo",
    subtitle: "Monitoramento cardíaco remoto utilizando ESP32 e IoT",
    aboutTitle: "📌 Sobre o Projeto",
    aboutText: "Este projeto desenvolve um sistema portátil de monitoramento cardíaco baseado no ESP32 e no sensor MAX30100.",
    howTitle: "⚙️ Como Funciona",
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

setLanguage("pt");
