let navbar;
let navbarHeight;
let homeSection;
let projectPageContent;


function resize() {
    //Get the navbar
    navbar = document.querySelector('.navbar');
// Get the height of the navbar
    navbarHeight = navbar.offsetHeight;
// Set the height of the #home section to the remaining viewport height
    homeSection = document.querySelector('#home');
//Get the project page content
    projectPageContent = document.querySelector('.project-description');

// Prevent navbar from covering the content on project pages
    if (projectPageContent) {
        projectPageContent.style.paddingTop = `${navbarHeight}px`;
    }

// Prevent navbar from covering the content
    if (homeSection) {
        homeSection.style.height = `calc(100vh - ${navbarHeight}px - ${homeSection.style.paddingTop} - ${homeSection.style.paddingBottom})`;
    }
}

// Smooth scrolling for all links with the anchor attribute
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - navbarHeight,
            behavior: 'smooth',
        });
    });
});

resize();
window.addEventListener('resize', resize);



