function generate_cat(){
    let img = document.createElement("img");
    img.setAttribute("src", "http://thecatapi.com/api/images/get?format=src&type=gif&size=small");
    img.setAttribute("id", "image");
    //img.src="Jellyfish.jpg";
    document.getElementById("image-container").appendChild(img);
}