var rightArrow = document.getElementById("right-arrow");
var pageContainer = document.getElementById("page-container");
var leftArrow = document.getElementById("left-arrow");
var navigationButtons = document.querySelectorAll('.action-controls li');
var slides = pageContainer.children;
var indexOfActiveElement = 0;
var numberOfSlides = slides.length; // 4
var hamburgerIcon = document.querySelector('.hamburger-menu');
var menuContainer = document.querySelector('.menu-container');
var closeMenu = document.querySelector('.close-menu');
var overlay = document.getElementById('overlay');


function onClickrightArrow() {
	// Hide the current slide
    slides[indexOfActiveElement].classList.remove("active");
    // Display the next slide
    slides[indexOfActiveElement + 1].classList.add("active");

    // And I update the navigation buttons by hiding the current navigation button
    // and activating the next navigation button
    updateNavigationButtons(+1);

    // keep track of the current active element index
    indexOfActiveElement += 1;

    // Edge cases

    // What happens when I get on the last slide?
    // we hide the right arrow button
    if (indexOfActiveElement === numberOfSlides - 1) {
    	rightArrow.classList.add("hidden");
    }
    // What happens when I click on the right arrow from the first slide and want to see
    // the left arrow on the second slide
    if (indexOfActiveElement !== 0) {
    	leftArrow.classList.remove("hidden");
    }
}

rightArrow.addEventListener("click", onClickrightArrow);

function onClickleftArrow() {
    slides[indexOfActiveElement].classList.remove("active");
    slides[indexOfActiveElement - 1].classList.add("active");
    updateNavigationButtons(-1);
    indexOfActiveElement -= 1;

    if (indexOfActiveElement === 0) {
    	leftArrow.classList.add("hidden");
    }
    if (indexOfActiveElement !== numberOfSlides - 1) {
    	rightArrow.classList.remove("hidden");
    }
}
leftArrow.addEventListener("click", onClickleftArrow);

function updateNavigationButtons(prevOrNext) {
	navigationButtons[indexOfActiveElement].classList.remove('active');
	navigationButtons[indexOfActiveElement + prevOrNext].classList.add('active');
}

function showMenu () {
	menuContainer.classList.add('active');
	overlay.classList.add('show');
}

function closeMenuFn () {
	menuContainer.classList.remove('active');
	overlay.classList.remove('show');
}

hamburgerIcon.addEventListener('click', showMenu);
closeMenu.addEventListener('click', closeMenuFn);
