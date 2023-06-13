const hoursEl = document.getElementById('hours-el');
const minsEl = document.getElementById('mins-el');
const secsEl = document.getElementById('secs-el');
const session = document.getElementById('session');


function updateClock() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hoursEl.innerHTML = hour;
    secsEl.innerHTML = sec;
    minsEl.innerHTML = min;


    if (sec < 10) {
        secsEl.textContent = '0' + sec;
    }

    if (min < 10) {
        minsEl.textContent = '0' + min;
    }

    if (hour > 12) {
        session.textContent = "PM";
    } else {
        session.textContent = "AM";
    }


}

setInterval(updateClock, 1000);


