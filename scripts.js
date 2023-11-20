
function scrollToContent() {
  document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
}

function navigateToLink(link) {

  console.log(`Navigating to ${link}`);
}

const menuToggle = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

