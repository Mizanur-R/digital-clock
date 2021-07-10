function selectId(selection) {
    return document.getElementById(selection)
}

const hour = selectId('hour')
const minutes = selectId('minutes')
const seconds = selectId('seconds')
const progress = selectId('progress')


function getCurrentTime() {
    let date = new Date()

    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    hour.innerHTML = hr
    minutes.innerHTML = min
    seconds.innerHTML = sec

    progress.style.width = (sec/60) * 100 + '%'
}

setInterval(getCurrentTime, 1000)