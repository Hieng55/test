const menuReveal = document.querySelector('.navbar-header_mobile');
const supportMenu = document.querySelector('.support-menu');
const barsHamburger = document.querySelector('.bars');
const closeNavbar = document.querySelector('.close-navbar');

menuReveal.addEventListener('click', () => {
  const isActive = supportMenu.classList.toggle('active');

  barsHamburger.classList.toggle('active', !isActive);
  closeNavbar.classList.toggle('active', isActive);
});

document.addEventListener('click', (event) => {
  if (!supportMenu.contains(event.target) && !menuReveal.contains(event.target)) {
    supportMenu.classList.remove('active');
    barsHamburger.classList.add('active');
    closeNavbar.classList.remove('active');
  }
});

