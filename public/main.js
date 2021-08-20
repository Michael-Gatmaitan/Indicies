"use strict";
/** Preffered to use GSAP for
 * better animation transitions*/
// Page indicator functions
const pageBars = [...document.getElementsByClassName("page-bar-container")];
const sections = [...document.getElementsByClassName("page-section")];
sections[0].scrollIntoView(true);
pageBars.forEach((e, i) => e.addEventListener('click', _ => sections[i].scrollIntoView({ behavior: "smooth" })));
const scrollProgress = document.getElementsByClassName("scroll-progress")[0];
document.body.onscroll = (e) => {
    let { innerHeight: viewportHeight } = window;
    let windowHeights = [0, viewportHeight * 1, viewportHeight * 2, viewportHeight * 3];
    let { pageYOffset } = window;
    let { scrollHeight } = document.body;
    scrollProgress.style.width = `${(pageYOffset / (scrollHeight - viewportHeight)) * 100}%`;
    pageBars.forEach((pageBar, i) => {
        if (pageYOffset >= windowHeights[i]) {
            pageBar.classList.add("active-bar");
            pageBars.forEach((pageBarRemoveClass, _i) => {
                if (!(i === _i))
                    pageBarRemoveClass.classList.remove("active-bar");
            });
        }
        if (pageYOffset > (viewportHeight * (windowHeights.length))) {
            pageBars.forEach((pageBarRemoveClass, _i) => {
                pageBarRemoveClass.classList.remove("active-bar");
            });
        }
    });
};
const { body } = document;
const menuContainer = document.getElementsByClassName("menu-container")[0];
let isMenuOpen = false;
const menuContainerAction = () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        menuContainer.style.opacity = "1";
        menuContainer.style.pointerEvents = "all";
        menuContainer.style.transform = 'translateX(0px)';
    }
    else {
        menuContainer.style.opacity = "0";
        menuContainer.style.pointerEvents = "none";
        menuContainer.style.transform = 'translateX(-12px)';
    }
};
