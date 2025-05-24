//header menu
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    toggleBtn.classList.toggle("active");
});

// Optional: Close when a link is clicked
document.querySelectorAll(".nav-links li").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        toggleBtn.classList.remove("active");
    });
});
//header menu ENDS.

const header = document.getElementById('main-header');
const hero = document.querySelector('.hero-banner');

window.addEventListener('scroll', () => {
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    if (window.scrollY > heroBottom - 80) {
        header.classList.remove('transparent');
        header.classList.add('solid');
    } else {
        header.classList.remove('solid');
        header.classList.add('transparent');
    }
});

// Initial state
window.dispatchEvent(new Event('scroll'));

//hero banner slide
let slides = document.querySelectorAll('.hero-banner .slide');
let current = 0;

function showNextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

setInterval(showNextSlide, 3000); // Change every 3 seconds
//hero banner slide ENDS.




//   third section 

const slider = document.querySelector(".image-slide");
const images = slider.querySelectorAll("img");
const background = document.querySelector(".background-blur");

let current_macro = 0;

function updateSlide() {
    images.forEach(img => img.classList.remove("active"));

    images[current_macro].classList.add("active");

    // Center scroll
    const offset = images[current_macro].offsetLeft - slider.offsetWidth / 2 + images[current].offsetWidth / 2;
    slider.scrollTo({ left: offset, behavior: 'smooth' });

    // Update background
    background.style.backgroundImage = `url(${images[current_macro].src})`;

    // Move to next image in loop
    current_macro = (current_macro + 1) % images.length;
}

setInterval(updateSlide, 2000); // change every 3 seconds

// Initialize
updateSlide();

// third section ENDS
