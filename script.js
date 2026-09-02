const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.cabecalho-menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});