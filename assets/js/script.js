// 5 - Feb - 2022 
SVGInject(document.querySelectorAll("img.injectable"));

// let body = document.body;
let menuBar = document.querySelector('.menuBar');
let themeBtn = document.querySelector('.themeToggle');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');


// themeBtn.addEventListener('click', () => {
//     console.log("object");
//     themeBtn.classList.toggle('fa-moon');
//     body.classList.toggle('userClick');
// });

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    navbar.classList.toggle('userClick');
});



/*****************************************************************
******************************************************************
******************************************************************/
// Only For Color Switching Purpose
const root = document.querySelector(':root');
const switchBtn = document.querySelector('.switchBtn');
const allThemeBtn = document.querySelectorAll('.themeBtn');
const colorSwitcher = document.querySelector('.colorSwitcher');

// Font Color Changer
switchBtn.addEventListener('click', () => {

    // just Open & Close color drawer
    colorSwitcher.classList.toggle('userClick');

    // clicking upon any color
    allThemeBtn.forEach(btn => {

        // clicking upon selected color
        btn.addEventListener('click', () => {
            root.style.setProperty('--mainColor', btn.style.backgroundColor);

            // after select a color, self close color palate... 
            colorSwitcher.classList.remove('userClick');
        })
    });
});
/*****************************************************************
******************************************************************
******************************************************************/



window.addEventListener('scroll', () => {
    menuBar.classList.remove('fa-times');
    navbar.classList.remove('userClick');
    colorSwitcher.classList.remove('userClick');



    // auto select menu according to screen scrolling
    sections.forEach(section => {

        let top = window.scrollY;
        let height = section.offsetHeight;
        let offset = section.offsetTop - 150;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        };
    });
});




