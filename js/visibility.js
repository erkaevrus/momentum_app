const itemTime = document.querySelector('.item-time')
const itemDate = document.querySelector('.item-date')
const itemGreeting = document.querySelector('.item-greeting')
const itemQuote = document.querySelector('.item-quote')
const itemWeather = document.querySelector('.item-weather')
const itemPlayer = document.querySelector('.item-player')

const blockTime = document.querySelector('.time')
const blockDate = document.querySelector('.date')
const blockGreeting = document.querySelector('.greeting-container')
const blockQuote = document.querySelector('.quote-container')
const blockWeather = document.querySelector('.weather')
const blockPlayer = document.querySelector('.player')


function showHideTime() {
    blockTime.classList.toggle('hidden')
    itemTime.classList.toggle('play-item')
}


function showHideDate() {
    blockDate.classList.toggle('hidden')
    itemDate.classList.toggle('play-item')
}


function showHideGreeting() {
    blockGreeting.classList.toggle('hidden')
    itemGreeting.classList.toggle('play-item')
}


function showHideQuote() {
    blockQuote.classList.toggle('hidden')
    itemQuote.classList.toggle('play-item')
}


function showHideWeather() {
    blockWeather.classList.toggle('hidden')
    itemWeather.classList.toggle('play-item')
}

function showHidePlayer() {
    blockPlayer.classList.toggle('hidden')
    itemPlayer.classList.toggle('play-item')
}


itemTime.addEventListener('click', showHideTime)
itemDate.addEventListener('click', showHideDate)
itemGreeting.addEventListener('click', showHideGreeting)
itemQuote.addEventListener('click', showHideQuote)
itemWeather.addEventListener('click', showHideWeather)
itemPlayer.addEventListener('click', showHidePlayer)
