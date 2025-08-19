// document.querySelector('.hamburger').addEventListener('click', function() {
//   document.querySelector('.nav-links').classList.toggle('show');
// });

// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('.hamburger').addEventListener('click', function() {
//     document.querySelector('.nav-links').classList.toggle('show');
//   });
// });

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

// Open menu
hamburger.addEventListener('click', () => {
    navLinks.classList.add('show');
});

// Close menu
closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show');
});

//slide show

let slideIndex = 0; // keeps track of which slide is showing
showSlides();

function showSlides() {
  let slides=document.querySelectorAll(".mySlides"); 
  let dots=document.querySelectorAll(".dot");

  // Hide all slides
  slides.forEach(slide=>slide.style.display = "none");
 
  //increase slideIndex by 1
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // reset to first slide if at the end
  }
//  remove active class from all dots
  dots.forEach(dot=>dot.classList.remove("active"));

// show the current slide + add active right dot 
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].classList.add("active");

setTimeout(showSlides, 40000); // Change slide every 4 seconds 
}