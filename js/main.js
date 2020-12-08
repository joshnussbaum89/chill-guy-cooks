const main = document.getElementById("main");
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const navLogo = document.querySelector('.nav-logo');
const desktopNav = document.querySelector('.desktopnav');
const mobileNav = document.querySelector('.sidenav');
const closeBtn = document.querySelector('.closebtn');
const footer = document.querySelector('#footer');
const youtube = document.querySelector('.youtube');
const recipesSearch = document.querySelector('.recipes-search');


/* ============================================= */
/*              Functions                        */
/* ============================================= */


// Open navigation based on user click 
function openNav() {
    mobileNav.style.width = "100%";
    main.style.marginRight = "100%";
    footer.style.display = 'none';
    if (youtube) {
        youtube.style.display = 'none';
    }
    navLogo.style.display = 'none';
    navMenu.style.display = 'none';
}

// Close navigation based on user click
function closeNav() {
    mobileNav.style.width = "0";
    main.style.marginRight = "0";
    footer.style.display = 'block';
    if (youtube) {
        youtube.style.display = 'block';
    }
    navLogo.style.display = 'block';
}

// Close navigation based on window resize
function closeNavOnWindowResize() {
    if (window.innerWidth < 768) {
        navMenu.style.display = "block";
        desktopNav.style.display = "none";
    } else if (window.innerWidth >= 768) {
        navMenu.style.display = "none";
        desktopNav.style.display = "flex";
        closeNav();
    }
}

// Change nav background to black on scroll
function blackNavOnScroll() {
    const top = window.scrollY;

    if (top === 0) {
        nav.style.backgroundColor = 'initial';
    } else if (top > 0) {
        nav.style.backgroundColor = '#131416';
    };
}

// Search for recipes dynamically as user types
function searchRecipes() {
    const userInput = recipesSearch.value.toLowerCase();
    const cards = document.querySelectorAll(".featured-img-pic");

    cards.forEach((recipe, index) => {
        const recipeTitle = recipe.firstElementChild.lastElementChild.firstElementChild.firstElementChild.textContent.toLowerCase();

        if (recipeTitle.includes(userInput)) {
            cards[index].style.display = "flex";
        } else {
            cards[index].style.display = "none";
        }
    });
}


/* ============================================= */
/*              Event Listeners                  */
/* ============================================= */


navMenu.addEventListener('click', openNav);
window.addEventListener('resize', closeNavOnWindowResize);
closeBtn.addEventListener('click', () => {
    closeNav();
    navMenu.style.display = "block";
});
window.addEventListener('scroll', blackNavOnScroll);
if (recipesSearch) {
    recipesSearch.addEventListener('keyup', searchRecipes);
}