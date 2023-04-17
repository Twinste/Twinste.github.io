// Responsive Navbar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const dropDownLinks = document.getElementsByClassName("dropdown-content")[0];


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
  mainNav.innerHTML += "<li><a id='project1' href='project1.html'>Project 1</a></li>";
  mainNav.innerHTML += "<li><a id='review1' href='review1.html'>Review 1</a></li>";
  mainNav.innerHTML += "<li><a id='review2' href='review2.html'>Review 2</a></li>";

  // mainNav.innerHTML += "<ul class='sub-navbar'><li><a id='CRAPPY-Webpage' href='stuff/$OFTWAREWE8SIT57.htm'>CRAPPY Webpage</a></li></ul>";
  // mainNav.innerHTML += "<li><div class='dropdown'><a href='#' class='toggle-subMenu'>Other Sites</a><div class='dropdown-content'><a id='CRAPPY-Webpage' href='stuff/$OFTWAREWE8SIT57.htm'>CRAPPY Webpage</a></div></div></li>";
})

$(function () {
  const subNav = document.getElementById("sub-navbar-links");
  subNav.innerHTML = "<li><a id='CRAPPY-Webpage' href='stuff/$OFTWAREWE8SIT57.htm'>CRAPPY Webpage</a></li>";
  subNav.innerHTML += "<li><a id='accessibility' href='accessibility/'>Accessibility</a></li>";
  subNav.innerHTML += "<li><a id='project1' href='project/'>Project1</a></li>";
  subNav.innerHTML += "<li><a id='hobby' href='hobby/'>Hobby</a></li>";
  subNav.innerHTML += "<li><a id='activity_11' href='activity11/Winstead-Activity11.html'>Activity 11</a></li>";
  subNav.innerHTML += "<li><a id='activity_12' href='activity12/Winstead-Activity12.html'>Activity 12</a></li>";
  subNav.innerHTML += "<li><a id='activity_13' href='activity13/Winstead-Activity13.html'>Activity 13</a></li>";
  subNav.innerHTML += "<li><a id='activity_14' href='activity14/Winstead-Activity14.html'>Activity 14</a></li>";
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
      url: "https://twinste.github.io/",
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
        '<a href="' + links[id]["url"] + '">' + '<u>' + links[id]["text"] + '</u>' + "</a>";
    }
  }

  $("#myCorpSite").html("site designed by " + htmlString + " &copy;2023");
});



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

const person = ["Thalia Lopez", "Jaydon Dunn", "Gene Christian", "Marshall Velazquez", "Anisa Robbins", "Minnie Perkins", "Carlo Graham"];
const salaries = [82000, 45000, 42000, 36000, 24000, 28000, 24000];

const displayResultsBtn = document.getElementById("displayResults");
const displaySalaryBtn = document.getElementById("displaySalary");
const addSalaryBtn = document.getElementById("addSalary");

function addSalary() {
  let name = document.getElementById("name").value;
  let salary = document.getElementById("salary").value;

  if (name == "" || salary == "") {
    alert("Please enter all feilds");
  }
  if (name != "" && salary != "") {
    person.push(name);
    salaries.push(salary);
    alert("Added Successfully!");
  }
};
addSalaryBtn.addEventListener('click', addSalary)


function displayResults() {
  let highest = 0;
  let average = 0;

  for (let i = 0; i < salaries.length; i++) {
    average += salaries[i];
    if (salaries[i] > highest) {
      highest = salaries[i];
    }
  }
  average = average / salaries.length;
  average = Math.round(average);

  const result = document.getElementById("results");
  result.innerHTML = "<h2>Highest Salary</h2>";
  result.innerHTML += "<p>" + "$" + highest + "</p>";
  result.innerHTML += "<h2>Average Salary</h2>";
  result.innerHTML += "<p>" + "$" + average + "</p>"
}

displayResultsBtn.addEventListener('click', displayResults)


function displaySalary() {
  const resultTable = document.getElementById("resultTable");
  resultTable.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";
  for (let i = 0; i < person.length; i++) {
    resultTable.innerHTML += "<tr><td>" + person[i] + "</td><td>" + "$" + salaries[i] + "</td></tr>";
  }
};
displaySalaryBtn.addEventListener('click', displaySalary)

