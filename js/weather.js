const weatherIcon = document.querySelector('.weather-icon')
const temperature = document.querySelector('.temperature')
const weatherDescription = document.querySelector('.weather-description')
const windSpeed = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const city = document.querySelector('.city')
const weatherError = document.querySelector('.weather-error')
let currentCity = 'Minsk'




async function getWeather() {
    city.value = currentCity
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`
    try {
        const res = await fetch(url)
        const data = await res.json()
        weatherIcon.className = 'weather-icon owf'
        weatherIcon.classList.add(`owf-${data.weather[0].id}`)
        temperature.textContent = `${data.main.temp.toFixed(0)}°C`
        weatherDescription.textContent = data.weather[0].description
        windSpeed.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`
        humidity.textContent = `Humidity: ${data.main.humidity}%`
        weatherError.textContent = ''
    } catch (error) {
        weatherError.textContent = `Error! city not found for ${currentCity}`
        temperature.textContent = ''
        weatherDescription.textContent = ''
        windSpeed.textContent = ''
        humidity.textContent = ''
    }
}


function changeCity() {
    currentCity = city.value
    getWeather()
}


function setLocalStorage() {
    localStorage.setItem('city', city.value)
}


function getLocalStorage() {
    if(localStorage.getItem('city')) {
        currentCity = localStorage.getItem('city')
        getWeather()
    }
}


getWeather()
document.addEventListener('change', changeCity)
window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)
