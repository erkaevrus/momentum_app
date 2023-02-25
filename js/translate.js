import i18next from 'https://deno.land/x/i18next/index.js'


i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                GREETING_MORNING: 'Good morning',
                GREETING_AFTERNOON: 'Good afternoon',
                GREETING_EVENING: 'Good evening',
                GREETING_NIGHT: 'Good night',
                WIND_SPEED: 'Wind speed',
                HUMIDITY: 'Humidity',
                DEFAULT_CITY: 'Minsk',
                METERS_PER_SECOND: 'm/s',
                LANGUAGE: 'Language',
                PLACEHOLDER: '[Enter name]',
                IMAGE_SOURCE: 'Image source',
                SHOW_TITLE: 'Hide/Show',
                TIME: 'Time',
                DATE: 'Date',
                GREETING: 'Greeting',
                QUOTE: 'Quote',
                WEATHER: 'Weather',
                PLAYER: 'Player'
            }
        },
        ru: {
            translation: {
                GREETING_MORNING: 'Доброе утро',
                GREETING_AFTERNOON: 'Добрый день',
                GREETING_EVENING: 'Добрый вечер',
                GREETING_NIGHT: 'Доброй ночи',
                WIND_SPEED: 'Скорость ветра',
                HUMIDITY: 'Влажность',
                DEFAULT_CITY: 'Минск',
                METERS_PER_SECOND: 'м/с',
                LANGUAGE: 'Язык',
                PLACEHOLDER: '[Введите имя]',
                IMAGE_SOURCE: 'Источник изображений',
                SHOW_TITLE: 'Скрыть/Отобразить',
                TIME: 'Время',
                DATE: 'Дата',
                GREETING: 'Приветствие',
                QUOTE: 'Цитата',
                WEATHER: 'Погода',
                PLAYER: 'Плеер'
            }
        }
   }
})


export default i18next
