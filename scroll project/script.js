const dateContainer = document.querySelector("#date");

let year = new Date().getFullYear();
dateContainer.innerHTML = year;
delete year;

const navToggle = document.querySelector("#nav-toggle");
const smallScreenNavLinks = document.querySelector(".small-screen-nav-links");
const title = document.querySelector(".title");

navToggleActive = false;
navToggle.addEventListener("click", () => {
    if (!navToggleActive)
    {
        navToggleActive = true;
        smallScreenNavLinks.style.maxHeight = "150px";
        title.style.marginTop = "100px";
    }

    else
    {               
        navToggleActive = false;
        smallScreenNavLinks.style.maxHeight = 0;
        title.style.marginTop = 0;
    }
})

const navContainer = document.querySelector(".nav-container");
const topBtn = document.querySelector(".scroll-top-btn");
const home = document.querySelector("header #background-img");

window.addEventListener("scroll", () => {
    //console.log(pageYOffset);
    let scrollHeight = pageYOffset;
    let homeHeight = home.getBoundingClientRect().height;

    if (scrollHeight > homeHeight - 1)
    {
        navContainer.classList.add("fixed-nav");
        topBtn.style.display = "initial";
    }

    else
    {
        navContainer.classList.remove("fixed-nav");
        topBtn.style.display = "none";
    }
})

const scrollLinks = document.querySelectorAll(".scroll-link");

// scrollLinks.forEach( (link) => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         const id = e.currentTarget.getAttribute("href").slice(1);
//         const element = document.getElementById(id);
//         let pos = element.offsetTop;
//         console.log(pos)
//     })
// })