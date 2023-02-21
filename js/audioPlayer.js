import playList from './playList.js'


const playBtn = document.querySelector('.play')
const prevBtn = document.querySelector('.play-prev')
const nextBtn = document.querySelector('.play-next')
const playListContainer = document.querySelector('.play-list')
const audio = new Audio()

let playNum = 0
let isPlay = false


playList.forEach(el => {
    const li = document.createElement('li')
    li.classList.add('play-item')
    li.textContent = el.title
    playListContainer.append(li)
})


const playItems = document.querySelectorAll('.play-item')


function selectPlayItem() {
    const playItemActive = document.querySelectorAll('.item-active')
    playItemActive.forEach(el => el.classList.remove('item-active'))
    playItems[playNum].classList.add('item-active')
}


function playAudio() {
    audio.src = playList[playNum].src
    audio.currentTime = 0
    if (!isPlay) {
        isPlay = true
        audio.play()
        selectPlayItem()
    } else {
        isPlay = false
        audio.pause()
    }
}
playBtn.addEventListener('click', playAudio)


function toggleBtn() {
    playBtn.classList.toggle('pause')
}
playBtn.addEventListener('click', toggleBtn)


function playNext() {
    playNum < 3 ? playNum++ : playNum = 0
    if (isPlay) {isPlay = false}
    playAudio()
}
nextBtn.addEventListener('click', playNext)


function toggleNextBtn() {
    if (isPlay) {
        playBtn.classList.add('pause')
   }
}
nextBtn.addEventListener('click', toggleNextBtn)


function playPrev() {
    playNum > 0 ? playNum-- : playNum = 3
    if (isPlay) {isPlay = false}
    playAudio()
}
prevBtn.addEventListener('click', playPrev)


function togglePrevBtn() {
    if (isPlay) {
        playBtn.classList.add('pause')
   }
}
prevBtn.addEventListener('click', togglePrevBtn)
