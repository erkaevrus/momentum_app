import  i18next from "./translate.js"


const greeting = document.querySelector('.greeting')
const name = document.querySelector('.name')


export function getTimeOfDay() {
    const date = new Date()
    const hours = date.getHours()
    const timeOfDay = ['night', 'morning', 'afternoon', 'evening']
    return timeOfDay[Math.floor(hours / 6)]
}


export function showGreeting() {
    const timeOfDay = getTimeOfDay()
    const arrTimeOfDay = ['night', 'morning', 'afternoon', 'evening']
    const greetingTranslate =  ['GREETING_NIGHT', 'GREETING_MORNING', 'GREETING_AFTERNOON', 'GREETING_EVENING']
    const greetingText = i18next.t(greetingTranslate[arrTimeOfDay.indexOf(timeOfDay)])
    return greeting.textContent = greetingText
}


function setLocalStorage() {
    localStorage.setItem('name', name.value)
}
window.addEventListener('beforeunload', setLocalStorage)


function getLocalStorage() {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name')
    }
}
window.addEventListener('load', getLocalStorage)
