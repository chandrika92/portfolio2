// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Responsive navigation menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('showing');
});

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  let errorMessage = '';
  if(!fullname) {
      errorMessage += 'Name must be 5-20 characters and only contain letters.\n';
  }
  if(!phone){
    errorMessage += 'please enter thre number'
  }

  if (!email || !validateEmail(email)) {
      errorMessage += 'Please enter a valid email address.\n';
  }
  if (!message) {
      errorMessage += 'Please enter a message.\n';
  }

  if (errorMessage) {
      alert(errorMessage);
  } else {
      alert('Thank you for your message!');
      // Optionally, you can add code to send the form data to your server here
      document.getElementById('contactForm').reset();
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}
