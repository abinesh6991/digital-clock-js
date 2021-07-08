function setAndShowTime() {


    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let am_pm = "AM";

    if(hours > 12){
        hours = hours - 12;
        am_pm = "PM";
    }

    if(hours == 0){
        am_pm = "PM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + am_pm;

    document.getElementById("timer").innerHTML = time;
}

setAndShowTime();

setInterval(setAndShowTime, 1000);
