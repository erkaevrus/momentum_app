import { getTimeOfDay } from "./greeting.js"


const body = document.querySelector('body')
const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')
let randomNum = getRandomNum(1, 20)
const timeOfDay = getTimeOfDay()

export let source= 'GitHub'



export function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function setBgFromGitHub() {
    const img = new Image()
    const bgNum = String(randomNum).padStart(2, 0)
    img.src = `https://raw.githubusercontent.com/erkaevrus/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
    img.onload = () => {
        body.style.backgroundImage = `url("${img.src}")`
    }
}


async function setBgFromUnsplash() {
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=UdOUxZn90BbjwN5ycKkGz1Qy6lEGWdzVswNxKp-9F8s`
    const res = await fetch(url)
    const data = await res.json()
    const img = new Image()
    img.src = data.urls.regular
    img.onload = () => {
        body.style.backgroundImage = `url("${img.src}")`
        document.body.style.backgroundSize = 'cover'
    }
}


async function setBgFromFlickr() {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6d88a2ce27f1f89b2ccb8bf2c1c96f0e&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`
    const res = await fetch(url)
    const data = await res.json()
    const img = new Image()
    img.src = data.photos.photo[randomNum].url_l
    img.onload = () => {
        body.style.backgroundImage = `url("${img.src}")`
        document.body.style.backgroundSize = 'cover'
    }
}


function getSlideNext() {
    if (randomNum < 20) {
        randomNum++
    } else {
        randomNum = 1
    }
    setBg(source)
}


function getSlidePrev() {
    if (randomNum > 1) {
        randomNum--
    } else {
        randomNum = 20
    }
    setBg(source)
}


export function setBg(source) {
    if (source === "GitHub") {
        setBgFromGitHub()
        return
    }

    if (source === "Unsplash") {
        setBgFromUnsplash()
        return
    }

    if (source === "Flickr") {
        setBgFromFlickr()
        return
    }
}

slideNext.addEventListener('click', getSlideNext)
slidePrev.addEventListener('click', getSlidePrev)
setBg(source)
