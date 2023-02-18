function result(clicked) {
    let random=Math.random()*10%3;
    random=Math.floor(random);

    let choice = document.getElementById(clicked).firstChild;

    let computer=document.createElement("img");

    switch (random) {
        case 0:
            computer.src="images/rock.jpg";
            break;
        case 1:
            computer.src="images/paper.jpg";
            break;
        case 3:
            computer.src="images/scissor.jpg";
            break;
        default:
            random=4;
            computer.src="images/scissor.jpg";
    }

    document.getElementById("remove").remove();
    choice.setAttribute("style", "box-shadow: 0 0 40px blueviolet")
    document.getElementById("image-container").appendChild(choice);

    let banner = document.createElement("h1");

    if(clicked=="rock" && random==3 || clicked=="paper" && random==0 || clicked=="scissor" && random==1 || clicked=="rock" && random==4){
        let answer = document.createTextNode("You Won!");
        banner.appendChild(answer);
        banner.setAttribute("style", "color: lightgreen")
        document.getElementById("image-container").appendChild(banner);
    }

    else if(clicked=="rock" && random==0 || clicked=="paper" && random==1 || clicked=="scissor" && random==3 || clicked=="scissor" && random==4){
        let answer = document.createTextNode("Tie!");
        banner.appendChild(answer);
        banner.setAttribute("style", "color: yellow")
        document.getElementById("image-container").appendChild(banner);
    }

    else{
        let answer = document.createTextNode("You Loose");
        banner.appendChild(answer);
        banner.setAttribute("style", "color: red")
        document.getElementById("image-container").appendChild(banner);
    }

    computer.setAttribute("style", "box-shadow: 0 0 40px red")
    document.getElementById("image-container").appendChild(computer);
}