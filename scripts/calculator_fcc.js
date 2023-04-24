// Responsive Navbar
const mainToggleButton = document.getElementsByClassName("toggle-button")[0];
const mainNavbarLinks = document.getElementsByClassName("navbar-links")[0];

mainToggleButton.addEventListener("click", () => {
  mainNavbarLinks.classList.toggle("active");
});



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
  subNav.innerHTML += "<li><a id='activity_15' href='activity15/Winstead-Activity15.html'>Activity 15</a></li>";

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

  const certificate = {
    1: {
      url: "https://www.freecodecamp.org/certification/twinste3/javascript-algorithms-and-data-structures",
      text: "Certified in JS.",
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


  let certificateString = "";

  for (let id in certificate) {
    if (pathName === certificate[id]["url"]) {
      certificateString += certificate[id]["text"];
    } else {
      certificateString +=
        '<a href="' + certificate[id]["url"] + '">' + '<u>' + certificate[id]["text"] + '</u>' + "</a>";
    }
  }

  $("#myCorpSite").html("site designed by " + htmlString + " &copy;2023, " + certificateString);
});

$(function () {
  const validations = document.getElementById("validations");
  validations.innerHTML = '<a id="validation_link_html" href="https://validator.w3.org/check?uri=referer"><img src="images/button_validation_html5.png" width="88" height="31" alt="Validate webpage HTML."></a>';
  validations.innerHTML += '<a id="validation_link_css" href="https://jigsaw.w3.org/css-validator/check/referer"><img src="images/button_validation_css.png" width="88" height="31" alt="Validate webpage CSS."></a>';

  document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
  document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
})

const calculator = document.querySelector('.calculator_fcc')
const keys = calculator.querySelector('.calculator__keys_fcc')
const display = document.querySelector('.display_fcc')


keys.addEventListener('click', e => {
  // Listening to key-presses
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent

    // When a user hits a number key
    if (!action) {
      if (displayedNum === '0') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
    }
    // When a user hits the decimal key
    if (action === 'decimal') {
      display.textContent = displayedNum + '.'
    }

    // When a user hits an operator key
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed')
      // Add custom attribute
      calculator.dataset.previousKeyType = 'operator'

      calculator.dataset.firstValue = displayedNum
      calculator.dataset.operator = action
    }

    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))

    const previousKeyType = calculator.dataset.previousKeyType

    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
    }



  }
})
