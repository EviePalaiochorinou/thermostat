import express from 'express';
const app = express();
const port = 3000;
console.log(`Server listening on localhost:${port}`);
app.listen(port);

import { Thermostat } from './thermostat.js';
import { WeatherApi } from './weatherApi.js';

const weather = new WeatherApi();
const thermostat = new Thermostat(weather);
thermostat.setCity('London');

app.get('/', (req, res) => {
  res.send('Hello, it\'s me, your thermostat!')
});

app.get('/temperature', (req, res) => {
  const temperature = thermostat.getTemperature();
  res.send(temperature);
});