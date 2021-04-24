burger = document.querySelector(".burger")
navbar = document.querySelector(".navbar")
navList = document.querySelector(".navList")
rightNav = document.querySelector(".rightNav")



burger.addEventListener("click",()=>{
    navList.classList.toggle("visibility-class");
    rightNav.classList.toggle("visibility-class");
    navbar.classList.toggle("height-nav");

})