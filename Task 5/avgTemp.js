const avgtemp = document.querySelector("#avgtemp");
function calculateAverageTemperature() {
  //temperatures of 24 hours
  var temp = [
    21, 20, 19, 19, 18, 18, 18, 18, 20, 19, 19, 19, 20, 22, 22, 23, 24, 23, 23,
    23, 23, 22, 21, 21,
  ];
  // the sum of temperatures
  var sum = 0;

  for (var i = 0; i < temp.length; i++) {
    sum = sum + temp[i];
  }

  // the average temperature
  const average = sum / 24; // hardcoded for only 24 hourly temperatures
  return average;
}

const averageTemp = calculateAverageTemperature();
console.log(
  `The average temperature for 24 hours is ${averageTemp.toFixed(2)} degrees.`
);

avgtemp.innerText = averageTemp;
