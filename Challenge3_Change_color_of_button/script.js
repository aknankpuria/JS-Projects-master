let all_buttons=document.getElementsByTagName("button");
let copy_buttons = [];

function onstart(){
    for(let i=0; i<all_buttons.length; i++){
        copy_buttons[i]=all_buttons[i].getAttribute("style");
    }
}

function change_color(value) {
    if(value=="Red"){
       for(let i=0; i<all_buttons.length; i++){
           all_buttons[i].setAttribute("style", "background-color: red");
       }
    }

    else if(value=="Green"){
        for(let i=0; i<all_buttons.length; i++){
            all_buttons[i].setAttribute("style", "background-color: green");
        }
    }

    else if(value=="Random"){
        let random_num1;
        for(let i=0; i<all_buttons.length; i++){
            random_num1 = Math.floor(Math.random() * all_buttons.length);
            random(random_num1, i);
        }
    }

    else if(value=="Reset"){
        let color;

        for(let i=0; i<all_buttons.length; i++){
            color = copy_buttons[i];
            all_buttons[i].setAttribute("style", color);
        }
    }
}

function random(random_num1, i) {
    let color;
    switch (random_num1){
        case 0:
            color = "background-color: green";
            break;
        case 1:
            color = "background-color: red";
            break;
        case 2:
            color = "background-color: orange";
            break;
        case 3:
            color = "background-color: yellow";
            break;
        default:
            color = "background-color: blue";
    }

    all_buttons[i].setAttribute("style", color);
}