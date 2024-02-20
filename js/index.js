// burger
const icons = document.querySelectorAll('.icon');
const burgerConteiner = document.querySelector('.burger-conteiner');
const header = document.querySelector('.navigation');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    burgerConteiner.classList.toggle("burger-conteiner-open")
    header.classList.toggle("header-baground")
  });
});