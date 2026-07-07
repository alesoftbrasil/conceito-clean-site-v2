const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menuBtn?.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const whatsappNumber = '5545998514032';
const form = document.querySelector('#quoteForm');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.querySelector('#nome').value.trim();
  const telefone = document.querySelector('#telefone').value.trim();
  const email = document.querySelector('#email').value.trim();
  const servico = document.querySelector('#servico').value;
  const mensagem = document.querySelector('#mensagem').value.trim();
  const texto = `Olá, gostaria de solicitar um orçamento da Conceito Clean.%0A%0ANome: ${nome}%0ATelefone: ${telefone}%0AE-mail: ${email || 'Não informado'}%0AServiço: ${servico}%0AMensagem: ${mensagem || 'Não informado'}`;
  window.open(`https://wa.me/${whatsappNumber}?text=${texto}`, '_blank');
});
