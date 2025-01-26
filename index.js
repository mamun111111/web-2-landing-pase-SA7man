const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links'); // Fixed variable name
const navLinksLi = document.querySelectorAll('.nav-links li'); // Corrected syntax

// Adding scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) { // Use 'window.scrollY' instead of 'this.scrollY'
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Adding click event listener for hamburger menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinksLi.forEach(navLinksLi => navLinksLi.addEventListener('click',()=>{
    navLinksLi.forEach(navLinksLi => navLinksLi.classList.remove('active'))
    navLinksLi.classList.add('active')
    hamburger.classList.remove('active')
    navLinks.classList.remove('active')
}))

// Typed.js initialization


// var typed = new Typed('#hero-tytles', {

//     strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//     typeSpeed: 50,
//   });


// Typed.js initialization
var options =('#hero-tytles', {
    strings: ['Creative Agent.', 'Typed.js is Awesome.', 'Typed.js is Cool.'], // Merged string arrays
    typeSpeed: 40,
    loop: true,
    backDelay: 2000, // Fixed property name
});

var typed = new Typed('#hero-tytles', options); // Corrected variable name and syntax

 