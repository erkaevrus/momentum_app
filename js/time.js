import { showGreeting } from "./greeting.js"
import  i18next from "./translate.js"

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
    const currentDate = date.toLocaleDateString(`${i18next.language === 'en' ? 'en' : 'ru'}`, options);
    dateElem.textContent = currentDate
}

showTime()


export default showTime
