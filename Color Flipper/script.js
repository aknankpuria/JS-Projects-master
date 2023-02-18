let file = window.location.pathname;
file = file.split('/');
file = file[file.length - 1];

console.log(file);

const colorBtn = document.getElementById("colorBtn");
const colorDesc = document.querySelector(".color");
const container = document.querySelector(".container");

if (file == "index.html")
{
    const colorList = ["red", "green", "blue", "yellow", "pink", "grey", "ghostwhite", "aqua", "tan", "tomaot", "skyblue", "orchid", "olive", "orange"];
    
    colorBtn.addEventListener("click", () => {
        let color = colorList[getRandomNum(colorList.length)];
        container.setAttribute("style", `background-color: ${color}`);
        colorDesc.innerHTML = color;
    })
}

else
{
    colorDesc.innerHTML = "#FFFFFF";
    
    const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    len = hexDigits.length;
    let hexColor = "";

    colorBtn.addEventListener("click", () => {
        hexColor = hexColor.concat('#');
        
        for(let i = 1; i <= 6; i++){
            let char = hexDigits[getRandomNum(len)];
            hexColor = hexColor.concat(char);
        }
        container.setAttribute("style", `background-color: ${hexColor}`);
        colorDesc.innerHTML = hexColor;
        hexColor = "";
    })
}

function getRandomNum(len)
{
    let num = Math.random() * len;
    return Math.floor(num);
}