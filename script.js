const crossbtn = document.querySelector(".cross");
const menuMob = document.querySelector(".Items-display");
const sanw = document.querySelector(".only-mob");
const myname = document.querySelector(".name");

crossbtn.addEventListener("click" , function(){
    menuMob.classList.remove("Menu-mobile-js")
    myname.classList.remove("Menu-mobile-after")
    sanw.classList.remove("Menu-mobile-after")

});

sanw.addEventListener("click", function(){
    menuMob.classList.add("Menu-mobile-js")
    myname.classList.add("Menu-mobile-after")
    sanw.classList.add("Menu-mobile-after")
});