// 5 - Feb - 2022 
SVGInject(document.querySelectorAll("img.injectable"));

// const body = document.body;
const menuBar = document.querySelector('.menuBar');
const themeBtn = document.querySelector('.themeToggle');
const navbar = document.querySelector('.navbar');


// themeBtn.addEventListener('click', () => {
//     console.log("object");
//     themeBtn.classList.toggle('fa-moon');
//     body.classList.toggle('userClick');
// });

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    navbar.classList.toggle('userClick');
});


window.addEventListener('scroll', () => {
    menuBar.classList.remove('fa-times');
    navbar.classList.remove('userClick');
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

