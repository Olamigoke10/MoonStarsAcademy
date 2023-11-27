const Header = document.querySelector('.head')
const Service = document.querySelector('.service_section')
const About = document.querySelector('.about_section')

ScrollReveal().reveal(Header, {
    delay: 700,
    origin: 'top',
    distance: '10px',
    duration: 700,
    easing: 'ease-in-out',
});

ScrollReveal().reveal(Service, {
    delay: 700,
    origin: 'right',
    distance: '10px',
    duration: 700,
    easing: 'ease-in-out',
});

ScrollReveal().reveal(About, {
    delay: 700,
    origin: 'left',
    distance: '10px',
    duration: 700,
    easing: 'ease-in-out',
});


// Menu Toggle
// JavaScript to show/hide the menu on button click
document.getElementById('menu_button').addEventListener('click', function () {
    var linkMenu = document.querySelector('.link_menu');
    if (linkMenu.style.display === 'flex') {
        linkMenu.style.display = 'none';
    } else {
        linkMenu.style.display = 'flex';
    }
});

// on scroll hide menu bar
window.addEventListener('scroll', function () {
    var linkMenu = document.querySelector('.link_menu');
    linkMenu.style.display = 'none';
});


//  Readmore
var isExpanded = false;

function toggleReadMore() {
  var paragraph = document.getElementById("read_span");
  var button = document.getElementById("readMoreButton");

  if (isExpanded) {
    paragraph.style.display = "none"; // Collapse the paragraph
    button.textContent = "Read More";
  } else {
    paragraph.style.display = "block"; // Expand the paragraph
    button.textContent = "Read Less";
  }

  isExpanded = !isExpanded; // Toggle the state
}

// Initially, hide the paragraph
toggleReadMore();

// Testismonial
// JavaScript for testimonial carousel
const carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;
let timer;

function showSlide(n) {
  carouselItems[currentItem].classList.remove('active');
  currentItem = (n + carouselItems.length) % carouselItems.length;
  carouselItems[currentItem].classList.add('active');
}

function nextSlide() {
  showSlide(currentItem + 1);
  resetTimer();
}

function prevSlide() {
  showSlide(currentItem - 1);
  resetTimer();
}

function startCarousel() {
  timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopCarousel() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  startCarousel();
}

// Show the first slide
showSlide(currentItem);

// Add event listeners for next and previous buttons
document.getElementById('carousel-next').addEventListener('click', nextSlide);
document.getElementById('carousel-prev').addEventListener('click', prevSlide);

// Start the carousel automatically
startCarousel();

// Contact Map
function initMap() {
    // Create a map centered on the desired location
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 40.7128, lng: -74.0060 }, // Update with desired coordinates
      zoom: 12 // Adjust the zoom level as needed
    });
  
    // Add a marker at the desired location
    var marker = new google.maps.Marker({
      position: { lat: 40.7128, lng: -74.0060 }, // Update with desired coordinates
      map: map,
      title: 'MOONSTARS SCHOLARS ACEDEMY' // Update with desired marker title
    });
  }

// Scroll To Top
document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopBtn = document.querySelector('#scroll-to-top');
  
    // Show scroll-to-top button when user scrolls down
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 100) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
  
    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });


// User page
const first_name = document.querySelector('#f_name').value
const last_name = document.querySelector('#s_name').value
const email = document.querySelector('#s_email').value
console.log("Hello World")




document.querySelector('.user_email').innerHTML = email