const renderTemperature = (temperature) => {
    const temp = document.querySelector("#temperature");
    temp.innerHTML = temperature;
  };
  
  module.exports = renderTemperature;