const canvas = document.getElementById('fondo-burbujas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

document.querySelector('.texto-bienvenida').addEventListener('click', function() {
    window.location.href = '../pages/inicio.html'; // Cambia la URL por la que desees
});

