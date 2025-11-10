/* script.js - simple nav highlight and small interactions */
document.addEventListener('DOMContentLoaded', function(){
  // active link highlight based on pathname
  const links = document.querySelectorAll('.nav a');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(a=>{
    const href = a.getAttribute('href').split('/').pop();
    if(href === path) a.style.background = 'linear-gradient(90deg, rgba(184,86,52,0.12), rgba(91,106,58,0.06))';
  });
});
