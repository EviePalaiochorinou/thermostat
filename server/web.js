import 'dotenv/config';
import cors from 'cors';
import express from 'express';
const app = express();
const port = 3000;
console.log(`Server listening on localhost:${port}`);
app.listen(port);
app.use(cors());

import { Thermostat } from './thermostat.js';
import { WeatherApi } from './weatherApi.js';

const weather = new WeatherApi();
const thermostat = new Thermostat(weather);
thermostat.setCity('London');

app.get('/', (req, res) => {
  res.send('Hello, it\'s me, your thermostat!')
});

app.get('/temperature', (req, res) => {
  let temperature = thermostat.getTemperature();
  res.send(JSON.stringify(temperature));
});

app.post('/up', (req, res) => {
  thermostat.up();
  res.send();
});

app.post('/down', (req, res) => {
  thermostat.down();
  res.send();
});

app.delete('/temperature', (req, res) => {
  thermostat.reset();
  res.send();
});