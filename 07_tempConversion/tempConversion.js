const convertToCelsius = function(tempF) {
  let result = (tempF - 32) * 5/9;
  var rounded = Math.round(result * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(tempC) {
  let result = (tempC * 9/5) + 32;
  var rounded = Math.round(result * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};