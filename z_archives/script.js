const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

const inputName = document.getElementById("myName");
const inputFeeling = document.getElementById("myfeeling");

const btn1 = document.getElementById("userInfoBtn");
const message1 = document.getElementById("message");

const inputSubtotal = document.getElementById("mySubtotal");
const calculateSalesTaxBtn = document.getElementById("salesTaxBtn");
const displaySalesTax = document.getElementById("salesTax");

const inputWidth = document.getElementById("myWidth");
const inputLength = document.getElementById("myLength");
const calculateRectAreaBtn = document.getElementById("rectAreaBtn");
const displayRectArea = document.getElementById("rectArea");

const inputNumToBeIncremented = document.getElementById("numToBeIncremented");
const numToBeIncrementedBtn = document.getElementById("numToBeIncrementedBtn");
const displayIncrementedNum = document.getElementById("incrementedNum");

const inputRadiusOfCircle = document.getElementById("radiusOfCircle");
const areaOfCircleBtn = document.getElementById("areaOfCircleBtn");
const displayAreaOfCircle = document.getElementById("areaOfCircle");

const inputSideA = document.getElementById("sideA");
const inputSideB = document.getElementById("sideB");
const inputSideC = document.getElementById("sideC");
const perimeterOfTriangleBtn = document.getElementById(
  "perimeterOfTriangleBtn"
);
const displayPerimeterOfTriangle = document.getElementById(
  "perimeterOfTriangle"
);

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAM = date.getHours() < 12;

  return `${hours}:${minutes.toString().padStart(2, "0")} ${
    isAM ? "AM" : "PM"
  }`;
}
/**
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${DAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);

function getInput() {
  const output1 =
    "Winstead Dynamics welcomes you, " +
    inputName.value +
    "! you are feeling " +
    inputFeeling.value +
    "!";

  if (inputFeeling.value && inputName.value != null) {
    message1.innerHTML = output1;
  }
}
btn1.addEventListener("click", getInput);

function calculateSalesTax() {
  let subtotal = inputSubtotal.value;
  let taxPercent = 0.0475;
  if (!subtotal) {
    displaySalesTax.innerHTML = "Invalid input";
  } else {
    let taxAmount = subtotal * taxPercent;
    var total = +subtotal + +taxAmount;

    total = Math.round(total * 100) / 100;

    displaySalesTax.innerHTML = "Total Sales Tax is: $" + total;
  }
}
calculateSalesTaxBtn.addEventListener("click", calculateSalesTax);

function calculateRectArea() {
  let width = inputWidth.value;
  let length = inputLength.value;

  if (!width || !length) {
    displayRectArea.innerHTML = "Invalid input";
  } else {
    let area = +width * +length;

    displayRectArea.innerHTML = "Area of rectangle is: " + area;
  }
}
calculateRectAreaBtn.addEventListener("click", calculateRectArea);

function incrementedNumFunction() {
  let incrementNum = inputNumToBeIncremented.value;

  if (!incrementNum) {
    displayIncrementedNum.innerHTML = "Invalid input";
  } else {
    incrementNum++;

    displayIncrementedNum.innerHTML = "Incremented Number is: " + incrementNum;
  }
}
numToBeIncrementedBtn.addEventListener("click", incrementedNumFunction);

function areaOfCircleFunction() {
  let pi = 3.14159265358979323846;
  let r = inputRadiusOfCircle.value;

  if (!r) {
    displayAreaOfCircle.innerHTML = "Invalid input";
  } else {
    let area = pi * +r * +r;

    displayAreaOfCircle.innerHTML = "Area Of Circle is: " + area;
  }
}
areaOfCircleBtn.addEventListener("click", areaOfCircleFunction);

function perimeterOfTriangleFunction() {
  let a = inputSideA.value;
  let b = inputSideB.value;
  let c = inputSideC.value;

  if (!a || !b || !c) {
    displayPerimeterOfTriangle.innerHTML = "Invalid input";
  } else {
    let perimeter = +a + +b + +c;

    displayPerimeterOfTriangle.innerHTML =
      "perimeter of Triangle is: " + perimeter;
  }
}
perimeterOfTriangleBtn.addEventListener("click", perimeterOfTriangleFunction);
