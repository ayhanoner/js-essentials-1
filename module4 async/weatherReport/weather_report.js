function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '4212a413c9056d051757fc2afe4a665e';

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            const temperature = data.main.temp - 273.15;

            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${temperature.toFixed(1)} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);

            const weatherInfo = document.getElementById('weatherInfo');

            weatherInfo.innerHTML = `
                <p>Failed to fetch weather. Please try again.</p>
            `;
        });
}

document
    .getElementById('weatherForm')
    .addEventListener('submit', showweatherDetails);