const navBtn = document.querySelector(".navbtn");
const ddcontent = document.querySelector(".ddcontent");
const smlinks = document.querySelector(".smlinks");

/* We can use toggle class functionality here (remove or add class) */

let active = 0;
navBtn.addEventListener("click", () => {
    if (!active)
    {
        active = 1;
        navBtn.style.color = "#fff";
        navBtn.style.backgroundColor = "#000";
        ddcontent.style.height = "180px";
    }

    else
    {
        active = 0;
        navBtn.style.color = "#000";
        navBtn.style.backgroundColor = "transparent";
        ddcontent.style.height = "0";
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth < 550)     // need to fix this (it collasps the dropdown when window width is changed below 550px)
    {
        ddcontent.style.height = "0";
        active = 0;
        navBtn.style.color = "#000";
        navBtn.style.backgroundColor = "transparent";
    }
})