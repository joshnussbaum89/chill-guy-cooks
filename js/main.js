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
const recipeButton = document.querySelectorAll('.recipe-button');


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
        const recipeTitles = recipe.firstElementChild.lastElementChild.firstElementChild.firstElementChild.textContent.toLowerCase();

        if (recipeTitles.includes(userInput)) {
            cards[index].style.display = "flex";
        } else {
            cards[index].style.display = "none";
        }
    });
}

// Display recipe to recipe.html without changing to a new page
function displayRecipe(e) {
    const dataIndex = e.target.getAttribute('data-index');

    // Change header picture to thumbnail of recipe clicked
    const hero = document.querySelector('.hero');
    const heroTitle = hero.firstElementChild.firstElementChild;
    hero.style.backgroundImage = `url(${recipes[dataIndex].image})`;
    heroTitle.innerHTML = `${recipes[dataIndex].name}`;

    // Create HTML for recipe based on which recipe was clicked
    const recipesDiv = document.querySelector('.recipes');
    console.log(recipes[dataIndex])
    // Change classes and create a recipe-desc sass component
    recipesDiv.innerHTML = `
            <h2 class="featured-recipe-title">${recipes[dataIndex].name}</h2>
            <ul class="featured-recipe-ingredients">${recipes[dataIndex].ingredients}</ul>
            <p class="featured-recipe-description">${recipes[dataIndex].description}</p>
            <input class="go-back" type="button" value="Go Back" onClick="window.location.reload()">
        `;
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
recipeButton.forEach((button) => {
    button.addEventListener('click', displayRecipe);
})