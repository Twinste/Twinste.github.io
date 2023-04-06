// Responsive Navbar
const mainToggleButton = document.getElementsByClassName("toggle-button")[0];
const mainNavbarLinks = document.getElementsByClassName("navbar-links")[0];

mainToggleButton.addEventListener("click", () => {
  mainNavbarLinks.classList.toggle("active");
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

$(function () {
  const mainNav = document.getElementById("navbar-links");
  mainNav.innerHTML = "<li><a id='home' href='index.html'>Home</a></li>";
  mainNav.innerHTML += "<li><a id='intro' href='intro.html'>Intro</a></li>";
  mainNav.innerHTML += "<li><a id='contract' href='contract.html'>Contract</a></li>";
  mainNav.innerHTML += "<li><a id='tables' href='tables.html'>Tables</a></li>";
  mainNav.innerHTML += "<li><a id='forms' href='forms.html'>Forms</a></li>";
  mainNav.innerHTML += "<li><a id='website-evaluations' href='website_evaluations.html'>Website Evaluations</a></li>";
  mainNav.innerHTML += "<li><a id='firstscripts' href='firstscripts.html'>Firstscripts</a></li>";
  mainNav.innerHTML += "<li><a id='polygons' href='polygons.html'>Polygons</a></li>";
  mainNav.innerHTML += "<li><a id='calculator_try' href='calculator_try.html'>Calculator Try</a></li>";
  mainNav.innerHTML += "<li><a id='calculator_fcc' href='calculator_fcc.html'>Calculator FCC</a></li>";
  mainNav.innerHTML += "<li><a id='arrays' href='arrays.html'>Arrays</a></li>";
  mainNav.innerHTML += "<li><a id='slideshow' href='slideshow.html'>Slideshow</a></li>";
  mainNav.innerHTML += "<li><a id='project1' href='project/'>Project1</a></li>";
  // mainNav.innerHTML += "<ul class='sub-navbar'><li><a id='CRAPPY-Webpage' href='stuff/$OFTWAREWE8SIT57.htm'>CRAPPY Webpage</a></li></ul>";
  // mainNav.innerHTML += "<li><div class='dropdown'><a href='#' class='toggle-subMenu'>Other Sites</a><div class='dropdown-content'><a id='CRAPPY-Webpage' href='stuff/$OFTWAREWE8SIT57.htm'>CRAPPY Webpage</a></div></div></li>";
})

$(function () {
  const subNav = document.getElementById("sub-navbar-links");
  subNav.innerHTML = "<li><a id='CRAPPY-Webpage' href='stuff/$OFTWAREWE8SIT57.htm'>CRAPPY Webpage</a></li>";
  subNav.innerHTML += "<li><a id='hobby' href='hobby/'>Hobby</a></li>";

})

// Sub-Navbar
const subToggleButton = document.getElementsByClassName("othersites")[0];
const subNavbarLinks = document.getElementsByClassName("sub-navbar-links")[0];

subToggleButton.addEventListener("click", () => {
  subNavbarLinks.classList.toggle("active");
});


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

// Update link
// document.getElementById("content_element").href = "contract.html";

// document.getElementsByTagName("nav").appendChild(a); */

// Sideshow



/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAM = date.getHours() < 12;

  return `${hours}:${minutes.toString().padStart(2, "0")} ${isAM ? "AM" : "PM"
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

  return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]
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

