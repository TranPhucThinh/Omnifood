const btnNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

btnNav.addEventListener('click', () => {
  header.classList.add('nav-open');
});
