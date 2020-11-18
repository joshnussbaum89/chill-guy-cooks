/* ============================================= */
/*              JavaScript                       */
/* ============================================= */

// Global variables 

//document.querySelector('.featured').innerHTML = "<h1>pagination recipe #1</h1>"
const main = document.getElementById("main");
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const desktopNav = document.querySelector('.desktopnav');
const mobileNav = document.querySelector('.sidenav');
const closeBtn = document.querySelector('.closebtn');
const footer = document.querySelector('#footer');
const youtube = document.querySelector('.youtube');

// Open Navigation
function openNav() {
    mobileNav.style.width = "100%";
    main.style.marginRight = "100%";
    footer.style.display = 'none';
    youtube.style.display = 'none';
}

// Close Navigation
function closeNav() {
    mobileNav.style.width = "0";
    main.style.marginRight = "0";
    footer.style.display = 'block';
    youtube.style.display = 'block';
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

// Change nav background to black on scroll
window.addEventListener('scroll', () => {
    const top = window.scrollY;

    if (top === 0) {
        nav.style.backgroundColor = 'initial';
    } else if (top > 0) {
        nav.style.backgroundColor = '#131416';
    };
});