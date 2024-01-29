const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("am/pm");

function updateClock(){
    let hr = new Date().getHours();
    let mn = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = "AM"

    if(hr > 12){
        ampm = "PM"
        hr = hr-12;
    }

    hr = hr < 10 ? "0"+ hr : hr;
    mn = mn < 10 ? "0"+ mn : mn;
    sec = sec < 10 ? "0"+ sec : sec;

    hourEl.innerText = hr;
    minutesEl.innerText = mn;
    secondsEl.innerText = sec;
    ampmEl.innerText = ampm

    setTimeout(() => {
        updateClock()
    },1000)

}

updateClock();

