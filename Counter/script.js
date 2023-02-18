let counter = document.querySelector(".counter");

const decBtn = document.getElementById("dec");
decBtn.addEventListener("click", () => {
    let prevCount = counter.innerHTML;
    prevCount =  parseInt(prevCount, 10);

    counter.innerHTML = prevCount - 1;
    changeColor(prevCount - 1);
})

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
    let prevCount = counter.innerHTML;
    counter.innerHTML = 0;
    changeColor(0);
})

const incBtn = document.getElementById("inc");
incBtn.addEventListener("click", () => {
    let prevCount = counter.innerHTML;
    prevCount =  parseInt(prevCount, 10);

    counter.innerHTML = prevCount + 1;
    changeColor(prevCount + 1);
})

let changeColor = (count) => {
    if (count > 0)
        counter.setAttribute("style" , "color: lightgreen");

    else if (count < 0)
        counter.setAttribute("style" , "color: red");

    else
        counter.setAttribute("style" , "color: black");
}