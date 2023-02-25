import  i18next from "./translate.js"
import getWeather from "./weather.js"
import getQuotes from "./quotes.js"
import showTime from "./time.js"


const selectRuLang = document.querySelector('.dropdown__link--ru')
const selectEnLang = document.querySelector('.dropdown__link--en')
const dropdownItemListLang = document.querySelectorAll('.item-lang')
const name = document.querySelector('.name')

const langTitle = document.querySelector('.lang-title')
const imageTitle = document.querySelector('.image-title')
const showTitle = document.querySelector('.show-title')
const itemTime = document.querySelector('.item-time')
const itemDate = document.querySelector('.item-date')
const itemGreeting = document.querySelector('.item-greeting')
const itemQuote = document.querySelector('.item-quote')
const itemWeather = document.querySelector('.item-weather')
const itemPlayer = document.querySelector('.item-player')


function changeLangtoRu() {
    i18next.changeLanguage('ru')
    dropdownItemListLang[1].classList.add('dropdown__item--lang')
    dropdownItemListLang[0].classList.remove('dropdown__item--lang')
    name.setAttribute('placeholder', i18next.t('PLACEHOLDER'))
    langTitle.textContent = i18next.t('LANGUAGE')
    imageTitle.textContent = i18next.t('IMAGE_SOURCE')
    showTitle.textContent = i18next.t('SHOW_TITLE')
    itemTime.textContent = i18next.t('TIME')
    itemDate.textContent = i18next.t('DATE')
    itemGreeting.textContent = i18next.t('GREETING')
    itemQuote.textContent = i18next.t('QUOTE')
    itemWeather.textContent = i18next.t('WEATHER')
    itemPlayer.textContent = i18next.t('PLAYER')
    getWeather()
    getQuotes()
    showTime()
}


function changeLangtoEn() {
    i18next.changeLanguage('en')
    dropdownItemListLang[1].classList.remove('dropdown__item--lang')
    dropdownItemListLang[0].classList.add('dropdown__item--lang')
    name.setAttribute('placeholder', i18next.t('PLACEHOLDER'))
    langTitle.textContent = i18next.t('LANGUAGE')
    imageTitle.textContent = i18next.t('IMAGE_SOURCE')
    showTitle.textContent = i18next.t('SHOW_TITLE')
    itemTime.textContent = i18next.t('TIME')
    itemDate.textContent = i18next.t('DATE')
    itemGreeting.textContent = i18next.t('GREETING')
    itemQuote.textContent = i18next.t('QUOTE')
    itemWeather.textContent = i18next.t('WEATHER')
    itemPlayer.textContent = i18next.t('PLAYER')
    getWeather()
    getQuotes()
    showTime()
}


selectRuLang.addEventListener('click', changeLangtoRu)
selectEnLang.addEventListener('click', changeLangtoEn)
