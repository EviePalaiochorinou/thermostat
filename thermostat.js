import { WeatherApi } from './weatherApi.js';

class Thermostat {
  constructor(weather) {
    this.temperature = 20;
    this.minTemp = 10;
    this.maxTemp = 32;
    this.powerSaveMode = true;
    this.weather = weather;
  }

  setCity(city) {
    this.weather.fetchWeatherData(city, (weatherData) => {
      console.log(weatherData);
    });
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.powerSaveMode === true) {
      this.maxTemp = 25;
      if (this.temperature === this.maxTemp) {
        return;
      } else {
        return this.temperature += 1;
      }
    } else {
      if (this.temperature === this.maxTemp) {
        return;
      } else {
        return this.temperature += 1;
      }
    }
  }

  down() {
    if (this.temperature === this.minTemp) {
      return;
    } else {
      return this.temperature -= 1;
    }  
  }

  powerSavingToggle() {
    this.powerSaveMode = !this.powerSaveMode;
    if (this.powerSaveMode === true) {
      this.maxTemp = 25;
    } else {
      this.maxTemp = 32;
    }
    return this.powerSaveMode;
  }

  reset() {
    return this.temperature = 20;
  }

  getEnergyUsage() {
    if (this.temperature < 18) {
      return 'low-usage';
    } else if (this.temperature <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
};

export { Thermostat };

const weather = new WeatherApi();
const thermostat = new Thermostat(weather);
thermostat.setCity('London');
thermostat.getTemperature();