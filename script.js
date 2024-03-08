let mobileMenu=document.querySelector(".mobile-menu i");
let mobileClose=document.querySelector(".navbar-mobile");
let closeIcon=document.querySelector(".navbar-mobile i");


mobileMenu.addEventListener("click",function(){
    mobileClose.style.display="block";
})

closeIcon.addEventListener("click",function(){
    mobileClose.style.display="none";
})

