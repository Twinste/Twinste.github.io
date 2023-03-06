// Responsive Navbar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
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

$(function getShape() {
  let n = document.getElementById("polygonNum").value;

  console.log(n);
});

const polygonNum = document.getElementById("polygonNum");
const numberSubmitBtn = document.getElementById("numberSubmitBtn");
const polygonMessage = document.getElementById("message");

function getShape() {
  let polygon = validateEntry(polygonNum.value);

  if (polygon == 1) {
    polygonMessage.innerHTML = "Henagon";
  } else if (polygon == 2) {
    polygonMessage.innerHTML = "Digon";
  } else if (polygon == 3) {
    polygonMessage.innerHTML = "Trigon";
  } else if (polygon == 4) {
    polygonMessage.innerHTML = "Tetragon";
  } else if (polygon == 5) {
    polygonMessage.innerHTML = "Pentagon";
  } else if (polygon == 6) {
    polygonMessage.innerHTML = "Hexagon";
  } else if (polygon == 7) {
    polygonMessage.innerHTML = "Heptagon";
  } else if (polygon == 8) {
    polygonMessage.innerHTML = "Octagon";
  } else if (polygon == 9) {
    polygonMessage.innerHTML = "Enneagon";
  } else if (polygon == 10) {
    polygonMessage.innerHTML = "Decagon";
  } else if (polygon == null) {
    polygonMessage.innerHTML = "Invalid input";
  }

  console.log(polygon);
}
numberSubmitBtn.addEventListener("click", getShape);

function validateEntry(polygon) {
  polygon = Math.abs(polygon);
  polygon = Math.round(polygon);

  if (polygon >= 1 && polygon <= 10) {
    return polygon;
  } else {
    return null;
  }
}
