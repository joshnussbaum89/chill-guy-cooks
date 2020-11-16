/* ============================================= */
/*              JavaScript                       */
/* ============================================= */

// Global variables 
const main = document.getElementById("main");
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const desktopNav = document.querySelector('.desktopnav');
const mobileMav = document.querySelector('.sidenav');
const closeBtn = document.querySelector('.closebtn');

// Open Navigation
function openNav() {
    mobileMav.style.width = "75%";
    main.style.marginRight = "75%";
}

// Close Navigation
function closeNav() {
    mobileMav.style.width = "0";
    main.style.marginRight = "0";
}

// Open and close navigation based on user click
nav.addEventListener('click', (e) => {
    if (e.target === navMenu) {
        openNav();
    } else if (e.target === closeBtn) {
        closeNav();
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