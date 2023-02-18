let personDb = [
    {
        "name" : "sarah",
        "job" : "web dev",
        "image" : "res/person1.jpg",
        "about" : "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
    },

    {
        "name" : "mike",
        "job" : "game engine dev",
        "image" : "res/person2.jpg",
        "about" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel."
    },

    {
        "name" : "john",
        "job" : "learner",
        "image" : "res/person3.jpg",
        "about" : "porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum"
    }
]

const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const randBtn = document.querySelector("#randbutton");

let nam = document.querySelector("#name");
let job = document.querySelector("#job");
let about = document.querySelector("#about");
let image = document.querySelector(".personImage img");

nam.textContent = personDb[0].name;
job.textContent = personDb[0].job;
about.textContent = personDb[0].about;

let num = 0;

leftBtn.addEventListener("click", () => {
    num--;
    if (num < 0)
        num = 2;
    
    changeContent(num);
})

rightBtn.addEventListener("click", () => {
    num++;
    if(num > 2)
        num = 0;

    changeContent(num);
})

randBtn.addEventListener("click", () => {
    num = Math.floor(Math.random() * 3);
    changeContent(num);
})

changeContent = (num) => {
    image.setAttribute("src", personDb[num].image);
    nam.textContent = personDb[num].name;
    job.textContent = personDb[num].job;
    about.textContent = personDb[num].about;
}