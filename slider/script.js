const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const slides = document.querySelectorAll(".slide-img");

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
let limit = slides.length - 1;

nextBtn.addEventListener("click", () => {
    if (++counter > limit)
        counter = 0;
    carousel();

});

prevBtn.addEventListener("click", () => {
    if (--counter < 0)
        counter = limit;
    carousel();

});

function carousel() {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}