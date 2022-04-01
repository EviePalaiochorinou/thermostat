import { got } from 'got';
import dotenv from 'dotenv';
dotenv.config();

class WeatherApi {
  constructor() {
    this.apiKey = `${process.env.API_KEY}`
  }


  fetchWeatherData(city, callback) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.apiKey}`;
    let weatherData = null;
    got(apiUrl).then((response) => {
      weatherData = JSON.parse(response.body);
      callback(weatherData.main.temp);
    });
  }

};

export { WeatherApi };

// weather.fetchWeatherData('London', (weatherResponse) => {
//   console.log(weatherResponse);
// });  