increaseTemperature = () => {
    return fetch("http://localhost:3000/up", { method: "POST" });
  };
  
  module.exports = increaseTemperature;