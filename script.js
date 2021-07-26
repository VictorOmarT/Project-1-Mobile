const crossbtn = document.querySelector(".cross");
const menuMob = document.querySelector(".Menu-mobile")
const sanw = document.querySelector(".only-mob")

crossbtn.addEventListener("click" , function(){
    menuMob.classList.toggle("Menu-mobile")
});

sanw.addEventListener("click", function(){
    menuMob.classList.toggle("Menu-mobile-js")
})