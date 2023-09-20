const bmiPrint = document.querySelector("#BMI");
function calculateBMI(weight, height) {
  if (weight <= 0 || height <= 0) {
    return "please provide positive weight and height";
  }

  const bmi = weight / (height * height);

  return bmi.toFixed(2);
}

const weight = 70; //  in kilograms
const height = 1.75; //  in meters

const bmi = calculateBMI(weight, height);
console.log("BMI:", bmi);
bmiPrint.innerText = `${bmi}`;
