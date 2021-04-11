var slideoutMenu = document.querySelector(".slide-links");
var menuIcon = document.querySelector(".slide-menu");
var websiteHeight = document.querySelector(".slide-out-menu"); //to push rest of website down when menu is open

//Slide Out Menu
menuIcon.addEventListener('click', function () {
    if (slideoutMenu.style.opacity == "1") {
      slideoutMenu.style.opacity = '0';
      websiteHeight.style.height = "auto";
    } else {
      slideoutMenu.style.opacity = '1';
      websiteHeight.style.height = "100vh";
    }
})


