// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// Hide Loader

window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});

// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function(){

    navMenu.classList.toggle("active");

});

// Lightbox

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

        lightboxImg.alt = image.alt;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});

// Hero Slideshow

const hero = document.querySelector(".hero");

const heroImages = [

    "images/hero1.jpg",

    "images/hero2.jpg",

    "images/hero3.jpg",

    "images/hero4.jpg",

    "images/hero5.jpg"

];

let currentHero = 0;

function changeHero(){

    currentHero++;

    if(currentHero >= heroImages.length){

        currentHero = 0;

    }

    hero.style.backgroundImage =
    `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url('${heroImages[currentHero]}')`;

}

setInterval(changeHero,5000);