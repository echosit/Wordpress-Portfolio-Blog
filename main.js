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

//Menu Active Links 
var btnContainer = document.getElementsByClassName("links");
var btns = btnContainer.getElementsByClassName("menu-link");

// Loop through the links and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

