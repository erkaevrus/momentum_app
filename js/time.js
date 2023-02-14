import { showGreeting } from "./greeting.js"

const time = document.querySelector('.time')
const dateElem = document.querySelector('.date')

 
function showTime() {
    const date = new Date()
    const currentTime = date.toLocaleTimeString()
    time.textContent = currentTime
    showDate()
    showGreeting()
    setTimeout(showTime, 1000)
}


function showDate() {
    const date = new Date()
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('en-US', options);
    dateElem.textContent = currentDate
}


showTime()
