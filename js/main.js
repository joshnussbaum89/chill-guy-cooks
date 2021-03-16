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

// Load first page of recipes with pagination if user is on recipes.html
if (document.URL.includes("recipes.html")) {
    showPage(recipes, 1);
    addPagination(recipes);
}

/* ============================================= */
/*              Functions                        */
/* ============================================= */

/**
 * Open navigation based on user click 
 */
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

/**
 * Close navigation based on user click 
 */
function closeNav() {
    mobileNav.style.width = "0";
    main.style.marginRight = "0";
    footer.style.display = 'block';

    if (youtube) {
        youtube.style.display = 'block';
    }

    navLogo.style.display = 'block';
}

/**
 * Close navigation based on window resize
 */
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

/**
 * Change nav background to black on scroll
 */
function blackNavOnScroll() {
    const top = window.scrollY;

    if (top === 0) {
        nav.style.backgroundColor = 'initial';
    } else if (top > 0) {
        nav.style.backgroundColor = '#131416';
    };
}

/**
 * Search for recipes dynamically as user types
 * @param {object} object - event 
 */
function searchRecipes(e) {
    console.log(typeof e);
    const eTargetValue = e.target.value.toLowerCase();

    let recipeArr = recipes.filter(recipe => {
        const recipeName = recipe.name.toLowerCase();
        return recipeName.includes(eTargetValue);
    })

    showPage(recipeArr, 1);
    addPagination(recipeArr);
}

/**
 * Add pagination buttons based on page load and search results
 * @param {object} object - list of recipes from recipes.js 
 */
function addPagination(list) {
    const numOfPaginationBtns = Math.ceil(list.length / 9);
    const linkList = document.querySelector('.link-list');
    linkList.innerHTML = '';

    for (let i = 1; i <= numOfPaginationBtns; i++) {
        linkList.insertAdjacentHTML("beforeend",
            `<li>
                <button type="button">${i}</button>
            </li>`);
    }

    if (linkList.firstElementChild) {
        const firstLiItem = linkList.firstElementChild.firstElementChild;
        firstLiItem.classList.add('active');

        // If there is only one pagination button, and it is clicked, reload the page
        firstLiItem.addEventListener('click', () => {
            window.location.reload();
        });
    }

    linkList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const linkListButtons = document.querySelectorAll('li button');
            const pageNumber = e.target.textContent;

            for (let i = 0; i < linkListButtons.length; i++) {
                linkListButtons[i].classList.remove('active');
                e.target.classList.add('active');
                showPage(recipes, +pageNumber);
            }
        }
    });
}

/**
 * Page is 1 by default and list is the data array of students.
 * @param {object} object - list 
 * @param {number} number - page 
 */
function showPage(list, page) {
    const startIndex = (page * 9) - 9;
    const endIndex = page * 9;
    const studentList = document.querySelector('.recipes-img');
    studentList.innerHTML = '';

    for (let i = 0; i < list.length; i++) {
        if (i >= startIndex && i < endIndex) {
            studentList.insertAdjacentHTML("beforeend",
                `<div class="featured-img-pic">
                    <div class="recipe-container">
                        <a href="#">
                            <img alt=${list[i].name} src=${list[i].image}>
                        </a>
                    <div class="recipe-overlay">
                        <div class="recipe-overlay-text">
                            <p>${list[i].name}</p>
                            <div class="recipe-buttons">
                                <a href="#"><button class="recipe-button" data-index=${list[i].id}>Recipe</button></a>
                                <a href=${list[i].link} target="_blank"><button
                                        class="recipe-button">Video</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <span class="recipe">${list[i].name}</span>`);
        }
    }

    const recipeButton = document.querySelectorAll('.recipe-button');
    recipeButton.forEach((button) => {
        button.addEventListener('click', displayRecipe);
    });

    return studentList;
}

/**
 * Display recipe to recipe.html without changing to a new page
 * @param {object} object - event 
 */
function displayRecipe(e) {
    const dataIndex = e.target.getAttribute('data-index');

    // Change header picture to thumbnail of recipe clicked
    const hero = document.querySelector('.hero');
    const heroTitle = hero.firstElementChild.firstElementChild;
    hero.style.backgroundImage = `url(${recipes[dataIndex].image})`;
    heroTitle.innerHTML = `${recipes[dataIndex].name}`;

    // Create HTML for recipe based on which recipe was clicked
    const recipesDiv = document.querySelector('.recipes');

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

// open nav
navMenu.addEventListener('click', openNav);

// close nav
window.addEventListener('resize', closeNavOnWindowResize);

// close nav
closeBtn.addEventListener('click', () => {
    closeNav();
    navMenu.style.display = "block";
});

// change nav styling when scrolling
window.addEventListener('scroll', blackNavOnScroll);

// search for recipes while typing
if (recipesSearch) {
    recipesSearch.addEventListener('keyup', searchRecipes);
}

// display recipe
const recipeButton = document.querySelectorAll('.recipe-button');
recipeButton.forEach((button) => {
    button.addEventListener('click', displayRecipe);
});
