const watchNowButtonEl = document.querySelector(".btn");
const closeButtonEl = document.querySelector(".close-btn");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video")

// Remove active class 
watchNowButtonEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active");
});

//Add active class
closeButtonEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
})
