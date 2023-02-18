const musicDb = [
    "res/music/Harry Potter.mp3",
    "res/music/PoTc.mp3",
    "res/music/Radioactive.mp3",
    "res/music/Demons.mp3",
    "res/music/Believer.mp3"
]

let myAudio = document.createElement("audio");
myAudio.volume = 0.5;

const songNameContainer = document.querySelector(".song-name");

let songName;
const SetSongName = (path) => {
    songName = path.slice(path.lastIndexOf("/") + 1, path.indexOf("."));
    songNameContainer.innerHTML = songName;
}

let currentIndex = 0;
let limit = musicDb.length - 1;

myAudio.src = musicDb[currentIndex];
SetSongName(musicDb[currentIndex]);

const playPauseBtn = document.querySelector("#playpause-btn");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");

const infoContainer = document.querySelector(".info-container");
const albumPic = document.querySelector(".album-pic-container .circular-container img");

playPauseBtn.addEventListener("click", () => {
    if (myAudio.paused)
    {
        myAudio.play();
        playPauseBtn.innerHTML = `<img src="res/pausebtn.png" width="20px" alt="pauseBtn">`;
    }

    else
    {
        myAudio.pause();
        playPauseBtn.innerHTML = `<img src="res/playbtn.png" width="20px" alt="playBtn">`;
    }

    infoContainer.classList.toggle("show-info-container");
    albumPic.classList.toggle("add-animation");
});

nextBtn.addEventListener("click", nextBtnFunc);

function nextBtnFunc()
{
    if (++currentIndex > limit)
        currentIndex = 0;

    myAudio.src = musicDb[currentIndex];
    myAudio.play();

    SetSongName(musicDb[currentIndex]);

    playPauseBtn.innerHTML = `<img src="res/pausebtn.png" width="20px" alt="pauseBtn">`;
    infoContainer.classList.add("show-info-container");
    albumPic.classList.add("add-animation");
    albumPic.src = `res/image/${songName}.jpg`;

    UpdateQueue()

}

prevBtn.addEventListener("click", () => {
    if (--currentIndex < 0)
        currentIndex = limit;

    myAudio.src = musicDb[currentIndex];
    myAudio.play();

    SetSongName(musicDb[currentIndex]);

    playPauseBtn.innerHTML = `<img src="res/pausebtn.png" width="20px" alt="pauseBtn">`;
    infoContainer.classList.add("show-info-container");
    albumPic.classList.add("add-animation");
    albumPic.src = `res/image/${songName}.jpg`;

    UpdateQueue();
});

const progressBar = document.querySelector(".progress");

myAudio.addEventListener("timeupdate", (e) => {
    let {duration, currentTime} = e.target;        // getting duration of song and current time at which song is playing
    let progressPercent = currentTime / duration * 100;
    progressBar.style.width = `${progressPercent}%`;
});

const progressContainer = document.querySelector(".progress-container");
let progressContainerWidth = progressContainer.offsetWidth;

progressContainer.addEventListener("click", (e) => {
    let clickX = e.offsetX;                       // getting the location of click on progress bar container
    let duration = myAudio.duration;
    
    myAudio.currentTime = clickX / progressContainerWidth * duration;
    console.log(clickX)
})

myAudio.addEventListener("ended", () => {
    nextBtnFunc();
})

const volumeContainer = document.querySelector(".volume-container");
const volumeBar = document.querySelector(".volume");
const volumeIcon = document.querySelector("#volume-icon");
const volumeContainerHeight = volumeContainer.offsetHeight;

volumeContainer.addEventListener("click", (e) => {
    let clickY = e.offsetY;
    let volumePercentage = 100 - (clickY / volumeContainerHeight * 100);
    volumeBar.style.height = `${volumePercentage}%`;

    (volumePercentage / 100 >= 1.0) ? myAudio.volume = 0.99 : myAudio.volume = volumePercentage / 100;
    (volumePercentage < 15.3) ? volumeIcon.style.color = "#000" :  volumeIcon.style.color = "#fff";
})


const nextSongcontainer = document.querySelector(".next-song-container");

UpdateQueue();
function UpdateQueue()
{
    let temp = 0;
    let tempCurrentIndex = currentIndex;
    let nextSongName;

    nextSongcontainer.innerHTML = ""
   
    while (temp < limit)
    {
        if (++tempCurrentIndex > limit)
            tempCurrentIndex = 0;

        nextSongName = musicDb[tempCurrentIndex].slice(musicDb[tempCurrentIndex].lastIndexOf("/") + 1, musicDb[tempCurrentIndex].indexOf("."));

        let div = document.createElement("div");
        let i = document.createElement("i");
        let p = document.createElement("p");

        div.className = "next-song"
        i.className = "fa fa-music";
        p.className = "next-song-name";
        p.innerHTML = nextSongName;

        div.appendChild(i)
        div.appendChild(p)

        nextSongcontainer.appendChild(div)

        temp++;
    }
}