var image_db = ["assets/images/A.png","assets/images/j.png","assets/images/K.png","assets/images/Q.png",
                "assets/images/2.png","assets/images/3.png","assets/images/4.png","assets/images/5.png",
                "assets/images/6.png","assets/images/7.png","assets/images/8.png","assets/images/9.png",
                "assets/images/10.png"];

var score_db = {
    0 : 10, 1 : 10, 2 : 10, 3 : 10, 4 : 2, 5 : 3, 6 : 4, 7 : 5, 8 : 6, 9 : 7, 10 : 8, 11 : 9, 12 : 10
}

async function hit(who) {
    let random_num=Math.floor(Math.random()*13);
    let img = document.createElement("img");
    img.src=image_db[random_num];

    let hit_sound = new sound("assets/sounds/swish.m4a");

    if(who=="human"){
        let previous_score = document.getElementById("human-score").innerText
        previous_score =  previous_score.split(' ')[1];

        let new_score = score(random_num);
        let current_score = new_score + parseInt(previous_score, 10);
        document.getElementById("human-score").innerHTML=`You: ${current_score}`;

        if(current_score>21){
            result();
        }

        hit_sound.play();
        document.getElementById("human-container").appendChild(img);
    }

    else {
        document.getElementById("status-message").innerHTML="Bot's Turn";
        await sleep(750);

        hit_sound.play();

        document.getElementById("bot-container").appendChild(img);

        let previous_score = document.getElementById("bot-score").innerText
        previous_score =  previous_score.split(' ')[1];

        let new_score = score(random_num);
        let current_score = new_score + parseInt(previous_score, 10);
        document.getElementById("bot-score").innerHTML=`Dealer: ${current_score}`;

        stand();
    }
}

function stand() {
    let bot_score = document.getElementById("bot-score").innerHTML.split(' ')[1];

    if(bot_score < 12){
        hit("bot");
    }

    else if(bot_score < 15){
        let random_num = Math.floor(Math.random()*4);

        if(random_num != 4){
            hit("bot");
        }

        else
            result();
    }

    else if(bot_score < 17){
        let random_num = Math.floor(Math.random()*10);

        if(random_num == 1){
            hit("bot");
        }

        else
            result();
    }

    else
        result();
}

function deal() {
    document.getElementById("bot-score").innerHTML="Dealer: 0";
    document.getElementById("human-score").innerHTML="You: 0";
    let status_message = document.getElementById("status-message");
    status_message.innerHTML = "Lets Play";
    status_message.style.color = "#000";

    let img = document.getElementById("bot-container").getElementsByTagName("img");
    
    while(img.length!=0){
        img[0].remove();        // img is live list (each time we delete first element from img HTMLcollection,)
    }                           // list adjusts itself and second element takes place of first element) so we will
                                // remove first element until the list is empty
    img = document.getElementById("human-container").getElementsByTagName("img");

    for(let i = img.length-1; i>=0; i--){   // another way to delete live list (start removing form end of list)
        img[i].remove();                    // in this way deleting last element will not affect remaining list
    }
}

function result() {
    let bot_score = document.getElementById("bot-score").innerHTML.split(' ')[1];
    let human_score = document.getElementById("human-score").innerHTML.split(' ')[1];

    let win_sound = new sound("assets/sounds/cash.mp3");
    let loose_sound = new sound("assets/sounds/aww.mp3");

    if (human_score>21){
        let status_message = document.getElementById("status-message");
        status_message.innerHTML="You Busted!";
        status_message.style.color = "yellow";

        loose_sound.play();
        let previous_loss_count = document.getElementById("losses").innerHTML;
        previous_loss_count = parseInt(previous_loss_count, 10);
        document.getElementById("losses").innerHTML = `${++previous_loss_count}`;
    }

    else if (bot_score>21){
        let status_message = document.getElementById("status-message");
        status_message.innerHTML="Bot Busted!";

        win_sound.play();
        let previous_win_count = document.getElementById("wins").innerHTML;
        previous_win_count = parseInt(previous_win_count, 10);
        document.getElementById("wins").innerHTML = `${++previous_win_count}`
    }

    else if(human_score > bot_score){
        win_sound.play();
        let status_message = document.getElementById("status-message");
        status_message.innerHTML="You Won!";
        status_message.style.color = "lightgreen";

        let previous_win_count = document.getElementById("wins").innerHTML;
        previous_win_count = parseInt(previous_win_count, 10);
        document.getElementById("wins").innerHTML = `${++previous_win_count}`;
    }

    else if(human_score < bot_score){
        loose_sound.play();
        let status_message = document.getElementById("status-message");
        status_message.innerHTML="You Lost!";
        status_message.style.color = "red";

        let previous_loose_count = document.getElementById("losses").innerHTML;
        previous_loose_count = parseInt(previous_loose_count, 10);
        document.getElementById("losses").innerHTML = `${++previous_loose_count}`;
    }

    else {
        let status_message = document.getElementById("status-message");
        status_message.innerHTML="Tie!";
        status_message.style.color = "orange";

        let previous_draw_count = document.getElementById("draws").innerHTML;
        previous_draw_count = parseInt(previous_draw_count, 10);
        document.getElementById("draws").innerHTML = `${++previous_draw_count}`;
    }
}

function score(random_num) {
    let score = score_db[`${random_num}`];
    return score;
}

class sound {
    constructor(src) {
        this.audio = document.createElement("audio");
        this.audio.src = src;
    }

    play() {
        this.audio.play();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function test() {
    let random_num = Math.floor(Math.random()*10);
    console.log(random_num)
}