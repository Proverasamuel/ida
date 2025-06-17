document.getElementById("formInscricao").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Inscrição recebida! Entraremos em contacto em breve.");
});
// Adicione isso em script.js
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.navbar');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});
