let bars=document.querySelector(".bars");
let close = document.querySelector(".sign-in")
let slidingNav=document.querySelector(".sliding-navbar")
bars.addEventListener("click",showMenu)
close.addEventListener("click",closeMenu)

function showMenu(){
   slidingNav.classList.toggle("pop")
}
function closeMenu(){
    slidingNav.classList.toggle("pop")
}   





