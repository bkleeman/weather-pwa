const apiKey = '5f116edd550cf1f81a3c966d41abaaa1';
const latitude = 41.8781
const longitude = -87.6298

const api = 'https://api.darksky.net/forecast/'

const main = document.querySelector('.container');

function createWeatherQuery(weather) {
    return `<div class="weather">
        <p><h5>${weather.latitude}</h5></p>
        </div>`
}

async function fetchWeather() {
    const res = await fetch(`${api}/${apiKey}/${latitude},${longitude}`);
    const json = await res.json();

    main.innerHTML = json.data.map(createWeatherQuery).join('\n');
}

window.addEventListener('load', async e => {
    await fetchWeather();

    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('serviceWorker.js');
            console.log('SW registered');

        } catch (error) {
            console.log('SW failed');

        }
    }
});



// const apiKey = '5f116edd550cf1f81a3c966d41abaaa1';
// const latitude = 41.8781
// const longitude = -87.6298

// const api = 'https://api.darksky.net/forecast/'

// const res = fetch(`${api}/${apiKey}/${latitude},${longitude}`);

// var myObj = JSON.parse(res);
// // document.getElementById("container").innerHTML = myObj;
// console.log(myObj)