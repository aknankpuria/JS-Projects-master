const buttons = document.querySelectorAll(".btn");


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        id = e.currentTarget.getAttribute("id") + "-content";

        clear();

        const toShow = document.querySelector(`#${id}`);
        toShow.style.display = "block";

        styleBtn(button);
    })
})

function clear(){
    buttons.forEach((button) => {
        unstyleBtn(button);

        let id = button.getAttribute("id") + "-content";
        const toClear = document.querySelector(`#${id}`);
        toClear.style.display = "none";
    })
}

const styleBtn = (btn) => {
    btn.style.backgroundColor = "rgb(223, 227, 235)";
}

styleBtn(document.querySelector("#history"));

const unstyleBtn = (btn) => {
    btn.style.backgroundColor = "rgb(103, 175, 175)";
}