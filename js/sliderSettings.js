import { setBg } from "./slider.js"


const selectGitHub = document.querySelector('.dropdown__link--GitHub')
const selectUnsplash = document.querySelector('.dropdown__link--Unsplash')
const selectFlickr = document.querySelector('.dropdown__link--Flickr')
const dropdownItemListSource = document.querySelectorAll('.item-source')

function changeToGitHub() {
    let source = "GitHub"
    dropdownItemListSource[0].classList.add('play-item')
    dropdownItemListSource[1].classList.remove('play-item')
    dropdownItemListSource[2].classList.remove('play-item')
    setBg(source)
}


function changeToUnsplash() {
    let source = "Unsplash"
    dropdownItemListSource[0].classList.remove('play-item')
    dropdownItemListSource[1].classList.add('play-item')
    dropdownItemListSource[2].classList.remove('play-item')
    setBg(source)
}


function changeToFlickr() {
    let source = "Flickr"
    dropdownItemListSource[0].classList.remove('play-item')
    dropdownItemListSource[1].classList.remove('play-item')
    dropdownItemListSource[2].classList.add('play-item')
    setBg(source)
}


selectGitHub.addEventListener('click', changeToGitHub)
selectUnsplash.addEventListener('click', changeToUnsplash)
selectFlickr.addEventListener('click', changeToFlickr)
