const fetchTemperature = () => {
    return fetch("http://localhost:3000")
      .then((res) => {return res.json()})
      .then((data) => {
        return data.temperature;
      });
    
  };
  
  module.exports = fetchTemperature;