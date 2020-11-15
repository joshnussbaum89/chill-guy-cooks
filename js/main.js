/* ============================================= */
/*              JavaScript                       */
/* ============================================= */

// Global variables 
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const closeBtn = document.querySelector('.closebtn');

// Open Navigation
function openNav() {
    document.getElementById("mySidenav").style.width = "75%";
    document.getElementById("main").style.marginRight = "75%";
}

// Close Navigation
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

// Open and close navigation based on user click
nav.addEventListener('click', (e) => {
    if (e.target === navMenu) {
        openNav();
    } else if (e.target === closeBtn) {
        closeNav();
    }
});