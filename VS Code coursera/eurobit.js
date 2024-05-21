function Timer(){
    window.location.href = 'https://www.7timer.info/doc.php?lang=en';
}
async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '5e9aa385080250f57c06834055f4b10e';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log(`Fetching weather data for city: ${city}`);
    console.log(`URL: ${url}`);

    try {
        const response = await fetch(url);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        console.log('Weather data:', data);

        document.getElementById('result').innerHTML = `
            <h3>Weather in ${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('result').innerHTML = `<p>${error.message}</p>`;
    }
}