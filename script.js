const crossbtn = document.querySelector('.cross');
const menuMob = document.querySelector('.Items-display');
const sanw = document.querySelector('.only-mob');
const myname = document.querySelector('.name');

crossbtn.addEventListener('click', () => {
  sanw.classList.remove('Menu-mobile-after');
  menuMob.classList.remove('Menu-mobile-js');
  myname.classList.remove('Menu-mobile-after');
});

sanw.addEventListener('click', () => {
  sanw.classList.add('Menu-mobile-after');
  menuMob.classList.add('Menu-mobile-js');
  myname.classList.add('Menu-mobile-after');
});