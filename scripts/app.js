const navbar = document.querySelector('.navbar');

// Get the height of the navbar
const navbarHeight = navbar.offsetHeight;

// Set the height of the #home section to the remaining viewport height
const homeSection = document.querySelector('#home');
homeSection.style.height = `calc(100vh - ${navbarHeight}px)`;
