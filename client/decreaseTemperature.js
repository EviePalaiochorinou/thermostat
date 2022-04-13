decreaseTemperature = () => {
    return fetch("http://localhost:3000/down", { method: "POST" });
    };
  
  module.exports = decreaseTemperature;