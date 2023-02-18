const playBtn = document.querySelector("#play-btn");
const video = document.querySelector(".video-container");

active = false;
playBtn.addEventListener("click", () => {
    if (!active)
    {
        active = true;
        video.pause();
        playBtn.innerHTML = "Play";
    }

    else
    {
        active = false;
        video.play();
        playBtn.innerHTML = "Pause";
    }
})

/*
       	DOMContentLoaded fires when initial html document has completely
        loaded and parsed, without waiting for stylesheets, images and subframes
        to finish loading.
	
	    the load event fires when the whole page has been loaded, including
        all dependencies such as stylesheets and images.
*/

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
})