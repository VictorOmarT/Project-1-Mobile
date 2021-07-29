const crossbtn = document.querySelector('.cross');
const menuMob = document.querySelector('.Items-display');
const sanw = document.querySelector('.only-mob');
const myname = document.querySelector('.name');
const seeproy = document.querySelector('.fiveg');
const crossmenu = document.querySelector('.multi-post-icon')
const multipost = document.querySelector('.multi-post-box-wrapper');


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

seeproy.addEventListener('click', () =>{
  console.log("hola");
  multipost.classList.remove('Menu-mobile-after');
});

crossmenu.addEventListener('click', () => {
  multipost.classList.add('Menu-mobile-after');
})