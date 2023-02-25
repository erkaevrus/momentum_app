import { getTimeOfDay } from "./greeting.js"


const body = document.querySelector('body')
const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')
let randomNum = getRandomNum(1, 20)


function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function setBg() {
    const img = new Image()
    const timeOfDay = getTimeOfDay()
    const bgNum = String(randomNum).padStart(2, 0)
    img.src = `https://raw.githubusercontent.com/erkaevrus/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
    img.onload = () => {
        body.style.backgroundImage = `url("${img.src}")`
    }
}


function getSlideNext() {
    if (randomNum < 20) {
        randomNum++
    } else {
        randomNum = 1
    }
    setBg()
}


function getSlidePrev() {
    if (randomNum > 1) {
        randomNum--
    } else {
        randomNum = 20
    }
    setBg()
}


slideNext.addEventListener('click', getSlideNext)
slidePrev.addEventListener('click', getSlidePrev)
setBg()


export default getRandomNum
