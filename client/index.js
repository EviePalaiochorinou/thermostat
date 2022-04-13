const fetchTemperature = require("./fetchTemperature");
const renderTemperature = require("./renderTemperature");
const increaseTemperature = require("./increaseTemperature");
const decreaseTemperature = require("./decreaseTemperature");
const resetTemperature = require("./resetTemperature");

const displayTemp = () => {
  fetchTemperature()
  .then((temperature) => renderTemperature(temperature)
  );
};

displayTemp();

document.querySelector("#up").addEventListener("click", () => {
  increaseTemperature().then(() => {return displayTemp()});})

document.querySelector("#down").addEventListener("click", () => {
  decreaseTemperature().then(() => {return displayTemp()});})


document.querySelector("#reset").addEventListener("click", () => {
  resetTemperature().then(() => {return displayTemp()});})