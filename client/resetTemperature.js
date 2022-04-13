resetTemperature = () => {
    return fetch("http://localhost:3000/", { method: "DELETE" });
};
  
  module.exports = resetTemperature;