const crossbtn = document.querySelector('.cross');
const menuMob = document.querySelector('.Items-display');
const sanw = document.querySelector('.only-mob');
const myname = document.querySelector('.name');
const seeproy = document.querySelector('.fiveg');
const crossmenu = document.querySelector('.multi-post-icon');
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

seeproy.addEventListener('click', () => {
  console.log('holssa');
  multipost.classList.remove('Menu-mobile-after');
});

crossmenu.addEventListener('click', () => {
  multipost.classList.add('Menu-mobile-after');
});

const porfolioCardlast = document.querySelector('#portfoliocard');

const porfolioCard = [
  {
    mainImg: 'pictures/ImgPlaceholder.png',
    name: 'Multi-Post Stories',
    paragra: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    csstag: './pictures/Tag.png',
    htmltag: './pictures/Tag(1).png',
    bootstag: './pictures/Tag(2).png',
    rubutag: './pictures/Tag(3).png',
    button: 'pictures/Enable.png',
    slash: '#',

  },
];

porfolioCard.forEach((project) => {
  //     Container
  const divcontainer = document.createElement('div');
  divcontainer.classList.add('colum-call');
  divcontainer.classList.add('d-flex');

  // main img
  const mainImgcontain = document.createElement('div');
  mainImgcontain.classList.add('mainimgdiv');
  const mainImg = document.createElement('img');
  mainImg.classList.add('big-imhs, marg-lefts');
  mainImg.classList.add('marg-lefts');
  mainImg.setAttribute('src', project.mainImg);
  mainImg.setAttribute('alt', project.imgAlt);
  mainImgcontain.append(mainImg);

  // Text Container
  const textcontain = document.createElement('div');
  textcontain.classList.add('textcontatins');
  const name = document.createElement('h5');
  const paragra = document.createElement('p');
  paragra.classList.add('par-black');
  textcontain.append(name);
  textcontain.append(paragra);

  // links
  const Linkdiv = document.createElement('div');
  Linkdiv.classList.add('textcontatins');
  const ulLink = document.createElement('ul');
  ulLink.classList.add('linksd');

  const csstag1 = document.createElement('li');
  const csstag = document.createElement('img');
  csstag.setAttribute('src', project.csstag);
  csstag.setAttribute('alt', project.imgAlt);
  csstag1.append(csstag);

  const csstag2 = document.createElement('li');
  const htmltag = document.createElement('img');
  htmltag.setAttribute('src', project.htmltag);
  htmltag.setAttribute('alt', project.htmltag);
  csstag2.append(htmltag);

  const csstag3 = document.createElement('li');
  const bootstag = document.createElement('img');
  bootstag.setAttribute('src', project.bootstag);
  bootstag.setAttribute('alt', project.bootstag);
  csstag3.append(bootstag);

  const csstag4 = document.createElement('li');
  const rubutag = document.createElement('img');
  rubutag.setAttribute('src', project.rubutag);
  rubutag.setAttribute('alt', project.rubutag);
  csstag4.append(rubutag);

  const button = document.createElement('a');
  button.setAttribute('href', project.slash);
  button.setAttribute('src', project.button);
  button.setAttribute('alt', project.button);
  button.classList.add('fiveg');

  Linkdiv.append(ulLink);
  ulLink.append(csstag1);
  ulLink.append(csstag2);
  ulLink.append(csstag3);
  ulLink.append(csstag4);
  ulLink.append(button);

  divcontainer.append(mainImgcontain);
  divcontainer.append(textcontain);
  divcontainer.append(Linkdiv);

  porfolioCardlast.append(divcontainer);
});