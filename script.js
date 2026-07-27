// =========================================
// SHOT BY KHADI - PREMIUM SCRIPT
// PART 1
// =========================================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// Sticky Header
const header = document.querySelector("header");

if(header){

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

header.style.background="rgba(0,0,0,.95)";

}else{

header.style.background="rgba(0,0,0,.75)";

}

});

}

// Loader
window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},800);

}

});

// Scroll To Top
const topBtn=document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

// Fade In Sections
const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

// Custom Cursor
const cursor=document.querySelector(".cursor");

if(cursor){

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

}

// =========================================
// SHOT BY KHADI - PREMIUM SCRIPT
// PART 2
// =========================================

// Animated Counters
const counters = document.querySelectorAll(".counter");

if (counters.length) {

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;
                const target = parseInt(counter.dataset.target);

                let count = 0;

                const updateCounter = () => {

                    const increment = Math.ceil(target / 100);

                    if (count < target) {

                        count += increment;

                        if (count > target) count = target;

                        counter.innerText = count;

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText = target + "+";

                    }

                };

                updateCounter();

                counterObserver.unobserve(counter);

            }

        });

    });

    counters.forEach(counter => counterObserver.observe(counter));

}

// Gallery Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-grid .gallery-item");

if (filterButtons.length && galleryItems.length) {

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            const filter = button.dataset.filter;

            galleryItems.forEach(item => {

                if (filter === "all" || item.dataset.category === filter) {

                    item.style.display = "";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });

}

// Gallery Lightbox
const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

if (lightbox && lightboxImg && closeLightbox) {

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = image.src;
            lightboxImg.alt = image.alt;

        });

    });

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}

// =========================================
// SHOT BY KHADI - PREMIUM SCRIPT
// PART 3
// =========================================

// WhatsApp Booking Form
const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name")?.value || "";
        const email = document.getElementById("email")?.value || "";
        const phone = document.getElementById("phone")?.value || "";
        const service = document.getElementById("service")?.value || "";
        const message = document.getElementById("message")?.value || "";

        const text = `📸 *NEW BOOKING REQUEST*

👤 Name: ${name}

📧 Email: ${email}

📱 Phone: ${phone}

📷 Service: ${service}

📝 Event Details:
${message}

Sent from the Shot By Khadi website.`;

        window.open(
            `https://wa.me/2348108178634?text=${encodeURIComponent(text)}`,
            "_blank"
        );

    });

}

// ESC key closes lightbox
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape" && lightbox) {

        lightbox.style.display = "none";

    }

});

// Active Navigation
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});

// Website Loaded
console.log("%cShot By Khadi Loaded Successfully!", "color:#D4AF37;font-size:18px;font-weight:bold;");
console.log("%cDesigned by VoltageTech", "color:white;font-size:14px;");
