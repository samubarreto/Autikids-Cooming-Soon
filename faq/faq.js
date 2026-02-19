document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
     1. CARREGAR IDIOMA SALVO (INTEGRAÇÃO)
  ========================================== */
  const savedLang = localStorage.getItem('autikids-language') || 'pt';
  
  // Define o atributo lang no HTML
  document.documentElement.lang = savedLang;
  
  // Chama a função do arquivo translation-faq.js
  if (typeof changeLanguage === 'function') {
    changeLanguage(savedLang);
  }

  /* ==========================================
     2. LÓGICA DO ACORDEÃO (PERGUNTAS E RESPOSTAS)
  ========================================== */
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      // Toggle da classe 'active' no botão
      question.classList.toggle('active');

      // Pega a resposta associada (o próximo elemento irmão)
      const answer = question.nextElementSibling;

      // Lógica de abrir/fechar
      if (question.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.paddingTop = "10px"; // Ajuste visual opcional
      } else {
        answer.style.maxHeight = null;
        answer.style.paddingTop = "0";
      }
    });
  });
});