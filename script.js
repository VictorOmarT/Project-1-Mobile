const crossbtn = document.querySelector(".cross");
const menuMob = document.querySelector(".Items-display");
const sanw = document.querySelector(".only-mob");
const myname = document.querySelector(".name");

crossbtn.addEventListener("click" , function(){
    menuMob.classList.toggle("Menu-mobile")
});

sanw.addEventListener("click", function(){
    menuMob.classList.toggle("Menu-mobile-js")
    myname.classList.toggle("Menu-mobile-after")
});