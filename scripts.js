// JavaScript for scrolling to Content section
function scrollToContent() {
  document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
}

// JavaScript for navigating to specific links
function navigateToLink(link) {

  console.log(`Navigating to ${link}`);
}

// JavaScript untuk hamburger menu toggle
const menuToggle = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

