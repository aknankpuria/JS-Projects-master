const body = document.querySelector("body");
const btn = document.querySelector("#modalbtn");
const closeBtn = document.querySelector("#close");
const content = document.querySelector(".modalcontent");

btn.addEventListener("click", () => {
    content.style.display = "initial";
})

closeBtn.addEventListener("click", () => {
    content.style.display = "none";
})