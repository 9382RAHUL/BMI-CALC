let result = document.getElementById("btn");

result.addEventListener("click", () => {
  let he = document.getElementById("height");
  let we = document.getElementById("weight");
  let hei = parseFloat(he.value);
  let wei = parseFloat(we.value);
  let bmi = wei / (hei / 100) ** 2;
  let dis = "";
  let display = document.getElementById("demo");

  if (isNaN(hei) || isNaN(wei)) {
    display.innerHTML = "please enter valid height and weight";
    return;
  }
  if (bmi < 18) {
    dis = "underweight";
  } else if (bmi < 25) {
    dis = "Normal weight";
  } else if (bmi < 30) {
    dis = "overweight";
  } else {
    dis = "obese";
  }
  display.innerHTML = "YOUR BMI IS " +  bmi.toFixed(2) + "(" + dis + ")";
});
