import { getRandomNum } from "./slider.js"


const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const changeQuote = document.querySelector('.change-quote')
let numberOfquote = getRandomNum(0, 6)


async function getQuotes() {
    const quotes = '../assets/quotes/data.json'
    const res = await fetch(quotes)
    const data = await res.json()
    const currentQuote = data[numberOfquote]
    quote.textContent = currentQuote.text
    author.textContent = currentQuote.author
}


function getNewQuote() {
    numberOfquote = getRandomNum(0, 6)
    getQuotes()
}


changeQuote.addEventListener('click', getNewQuote)
getQuotes()
