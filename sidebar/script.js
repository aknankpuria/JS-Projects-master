const navbtn = document.querySelector(".navbtn");
const navcontainer = document.querySelector(".navcontainer")

let active = 0;
navbtn.addEventListener("click", () => {
    if (!active)
    {
        active = 1;
        navcontainer.style.width = "200px";

        styleButton();
    }

    else
    {
        active = 0;
        navcontainer.style.width = "0";

        unStyleButton();
    }
})

const styleButton = () => {
    navbtn.style.color = "#fff";
    navbtn.style.backgroundColor = "#000";
}

const unStyleButton = () => {
    navbtn.style.color = "#000";
    navbtn.style.backgroundColor = "transparent";
}