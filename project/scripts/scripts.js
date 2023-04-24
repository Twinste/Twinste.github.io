const mainToggleButton = document.getElementsByClassName("site-header-toggle")[0];
const mainNavbarLinks = document.getElementsByClassName("navbar-links")[0];

mainToggleButton.addEventListener("click", () => {
    mainNavbarLinks.classList.toggle("active");
});

$(function () {
    const mainNav = document.getElementById("navbar-links");
    mainNav.innerHTML = "<li><a href='visit.html'>Visit</a></li>";
    mainNav.innerHTML += "<li><a href='events.html'>Events</a></li>";
    mainNav.innerHTML += "<li><a href='learn.html'>Learn</a></li>";
    mainNav.innerHTML += "<li><a href='about.html'>About Us</a></li>";
})

$(function () {
    const subNav = document.getElementById("sub-navbar-links");
    subNav.innerHTML = "<li><a href='blog.html'>Blog</a></li>";
    subNav.innerHTML += "<li><a href='support.html'>Support</a></li>";

})

// // Get the DOM elements for the image carousel
// const wrapper = document.querySelector(".wrapper"),
//     carousel = document.querySelector(".carousel"),
//     images = document.querySelectorAll("img"),
//     buttons = document.querySelectorAll(".button");

// let imageIndex = 1,
//     intervalId;

// // Define function to start automatic image slider
// const autoSlide = () => {
//     // Start the slideshow by calling slideImage() every 2 seconds
//     intervalId = setInterval(() => slideImage(++imageIndex), 2000);
// };
// // Call autoSlide function on page load
// autoSlide();

// // A function that updates the carousel display to show the specified image
// const slideImage = () => {
//     // Calculate the updated image index
//     imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
//     // Update the carousel display to show the specified image
//     carousel.style.transform = `translate(-${imageIndex * 100}%)`;
// };

// // A function that updates the carousel display to show the next or previous image
// const updateClick = (e) => {
//     // Stop the automatic slideshow
//     clearInterval(intervalId);
//     // Calculate the updated image index based on the button clicked
//     imageIndex += e.target.id === "next" ? 1 : -1;
//     slideImage(imageIndex);
//     // Restart the automatic slideshow
//     autoSlide();
// };

// // Add event listeners to the navigation buttons
// buttons.forEach((button) => button.addEventListener("click", updateClick));

// // Add mouseover event listener to wrapper element to stop auto sliding
// wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// // Add mouseleave event listener to wrapper element to start auto sliding again
// wrapper.addEventListener("mouseleave", autoSlide);



$(function () {
    const socialNav = document.getElementById("social-navbar-links");
    socialNav.innerHTML = "<li><a href='https://www.facebook.com/pages/UNC-Charlotte-Botanical-Gardens/182827401740325' class='fa fa-facebook-f'></a></li>";
    socialNav.innerHTML += "<li><a href='https://www.instagram.com/unccharlottegardens/' class='fa fa-instagram'></a></li>";
    socialNav.innerHTML += "<li><a href='https://www.youtube.com/channel/UC3o5RzfXs6MTORsSXFdVXiA' class='fa fa-youtube'></a></li>";
    socialNav.innerHTML += "<li><a href='https://twitter.com/NinerGardens' class='fa fa-twitter'></a></li>";
    socialNav.innerHTML += "<li><a href='https://www.linkedin.com/company/unc-charlotte-botanical-gardens/' class='fa fa-linkedin'></a></li>";

})

$(function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})