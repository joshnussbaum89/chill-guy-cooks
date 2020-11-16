/* ============================================= */
/*              JavaScript                       */
/* ============================================= */

// Global variables 
const main = document.getElementById("main");
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const desktopNav = document.querySelector('.desktopnav');
const mobileNav = document.querySelector('.sidenav');
const closeBtn = document.querySelector('.closebtn');

// Open Navigation
function openNav() {
    mobileNav.style.width = "75%";
    mobileNav.style.margin = "0";
    main.style.marginRight = "75%";
}

// Close Navigation
function closeNav() {
    mobileNav.style.width = "0";
    main.style.marginRight = "0";
}

// Open and close navigation based on user click
nav.addEventListener('click', (e) => {
    if (e.target === navMenu) {
        openNav();
        navMenu.style.display = "none";
    } else if (e.target === closeBtn) {
        closeNav();
        navMenu.style.display = "block";
    }
});

// Close navigation based on window resize
window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
        navMenu.style.display = "block";
        desktopNav.style.display = "none";
    } else if (window.innerWidth > 768) {
        navMenu.style.display = "none";
        desktopNav.style.display = "flex";
        closeNav();
    }
});