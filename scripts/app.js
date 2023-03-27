const navbar = document.querySelector('.navbar');

// Get the height of the navbar
const navbarHeight = navbar.offsetHeight;

// Set the height of the #home section to the remaining viewport height
const homeSection = document.querySelector('#home');
homeSection.style.height = `calc(100vh - ${navbarHeight}px - ${homeSection.style.paddingTop} - ${homeSection.style.paddingBottom})`;

// Smooth scrolling for all links with the anchor attribute
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});
