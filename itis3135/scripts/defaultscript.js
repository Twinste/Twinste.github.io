// Responsive Navbar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

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

const displaySiteLinks = document.getElementById("siteLinks");

// $(function () {
//   console.log(location.pathname.split("/").splice(-1));
//   const pathName = String(location.pathname.split("/").splice(-1));
//   const links = {
//     1: {
//       url: "index.html",
//       text: "Home",
//       alt: "Home page",
//     },
//     2: {
//       url: "intro.html",
//       text: "Introduction",
//       alt: "Introduction page",
//     },
//     3: {
//       url: "contract.html",
//       text: "Contract",
//       alt: "Contract page",
//     },
//     4: {
//       url: "tables.html",
//       text: "Tables",
//       alt: "Tables page",
//     },
//     5: {
//       url: "forms.html",
//       text: "Form",
//       alt: "Form page",
//     },
//   };

//   const linkSeperator = " | ";
//   let htmlString = "";

//   for (let id in links) {
//     if (pathName === links[id]["url"]) {
//       htmlString += links[id]["text"];
//     } else {
//       htmlString +=
//         '<a href="' + links[id]["url"] + '">' + links[id]["text"] + "</a>";
//     }
//     if (Number(id) < Object.keys(links).length) {
//       htmlString += linkSeperator;
//     }
//   }

//   $("#siteLinks").html(htmlString);
// });

$(function () {
  console.log(location.pathname.split("/").splice(-1));
  const pathName = String(location.pathname.split("/").splice(-1));
  const links = {
    1: {
      url: "https://webpages.charlotte.edu/twinste3/",
      text: "CLT Site",
      // alt: "Home page",
    },
    2: {
      url: "https://github.com/Twinste/",
      text: "Github",
      alt: "Github",
    },
    3: {
      url: "https://twinste.github.io/itis3135/",
      text: "Github Pages",
      alt: "Github Pagese",
    },
    4: {
      url: "https://www.freecodecamp.org/twinste3",
      text: "freecodecamp",
      alt: "freecodecamp page",
    },
    5: {
      url: "https://www.codecademy.com/profiles/twinste3",
      text: "Codecademy",
      alt: "Codecademy page",
    },
    6: {
      url: "https://www.linkedin.com/in/tyrellw/",
      text: "LinkedIn",
      alt: "LinkedIn page",
    },
  };

  const linkSeperator = " || ";
  let htmlString = "";

  for (let id in links) {
    if (pathName === links[id]["url"]) {
      htmlString += links[id]["text"];
    } else {
      htmlString +=
        '<a href="' + links[id]["url"] + '">' + links[id]["text"] + "</a>";
    }
    if (Number(id) < Object.keys(links).length) {
      htmlString += linkSeperator;
    }
  }

  $("#myPages").html(htmlString);
});

$(function () {
  console.log(location.pathname.split("/").splice(-1));
  const pathName = String(location.pathname.split("/").splice(-1));
  const links = {
    1: {
      url: "winsteaddynamics.com/",
      text: "Winstead Dynamics.",
      // alt: "Home page",
    },
  };

  let htmlString = "";

  for (let id in links) {
    if (pathName === links[id]["url"]) {
      htmlString += links[id]["text"];
    } else {
      htmlString +=
        '<a href="' + links[id]["url"] + '">' + links[id]["text"] + "</a>";
    }
  }

  $("#myCorpSite").html("site designed by " + htmlString + " &copy;2023");
});

// Home nav element
var home = document.createElement("a");
var linkText = document.createTextNode("Home");
home.appendChild(linkText);
home.title = "Home";
home.href = "index.html";
document.getElementById("home").appendChild(home);

// Home nav element
var intro = document.createElement("a");
var linkText = document.createTextNode("Intro");
intro.appendChild(linkText);
intro.title = "Intro";
intro.href = "intro.html";
document.getElementById("intro").appendChild(intro);

// Home nav element
var contract = document.createElement("a");
var linkText = document.createTextNode("Contract");
contract.appendChild(linkText);
contract.title = "Contract";
contract.href = "contract.html";
document.getElementById("contract").appendChild(contract);
// Tables element
var tables = document.createElement("a");
var linkText = document.createTextNode("Tables");
tables.appendChild(linkText);
tables.title = "Tables";
tables.href = "tables.html";
document.getElementById("tables").appendChild(tables);
// Forms elements
var forms = document.createElement("a");
var linkText = document.createTextNode("Forms");
forms.appendChild(linkText);
forms.title = "Forms";
forms.href = "forms.html";
document.getElementById("forms").appendChild(forms);
// Website Evaluations
var website_evaluations = document.createElement("a");
var linkText = document.createTextNode("Website Evaluations");
website_evaluations.appendChild(linkText);
website_evaluations.title = "Contract";
website_evaluations.href = "website_evaluations.html";
document.getElementById("website-evaluations").appendChild(website_evaluations);
// CRAPPY Webpage
var crappyWebpage = document.createElement("a");
var linkText = document.createTextNode("CRAPPY-Webpage");
crappyWebpage.appendChild(linkText);
crappyWebpage.title = "CRAPPY Webpage";
crappyWebpage.href = "stuff/$OFTWAREWE8SIT57.htm";
document.getElementById("CRAPPY-Webpage").appendChild(crappyWebpage);
// Firstscripts
var firstscripts = document.createElement("a");
var linkText = document.createTextNode("Firstscripts");
firstscripts.appendChild(linkText);
firstscripts.title = "Firstscripts";
firstscripts.href = "firstscripts.html";
document.getElementById("firstscripts").appendChild(firstscripts);
// polygons
var polygons = document.createElement("a");
var linkText = document.createTextNode("Polygons");
polygons.appendChild(linkText);
polygons.title = "Polygons";
polygons.href = "polygons.html";
document.getElementById("polygons").appendChild(polygons);
// Calculator Try
var calculator_try = document.createElement("a");
var linkText = document.createTextNode("Calculator Try");
calculator_try.appendChild(linkText);
calculator_try.title = "calculator_try";
calculator_try.href = "calculator_try.html";
document.getElementById("calculator_try").appendChild(calculator_try);
// calculator_fcc
var calculator_fcc = document.createElement("a");
var linkText = document.createTextNode("Calculator FCC");
calculator_fcc.appendChild(linkText);
calculator_fcc.title = "calculator_fcc";
calculator_fcc.href = "calculator_fcc.html";
document.getElementById("calculator_fcc").appendChild(calculator_fcc);

// Update link
// document.getElementById("content_element").href = "contract.html";

// document.getElementsByTagName("nav").appendChild(a); */

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
  let name = inputName.value;
  let feeling = inputFeeling.value;

  const output1 =
    "Winstead Dynamics welcomes you, " +
    name +
    "! you are feeling " +
    feeling +
    "!";

  if (!name || !feeling) {
    message1.innerHTML = "Invalid input";
  } else {
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
