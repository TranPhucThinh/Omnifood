const btnNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

btnNav.addEventListener('click', () => {
  header.classList.toggle('nav-open');
});

// Sticky navigation
const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(entries);
    console.log(ent);
  },
  {
    root: null,
    threshold: 0,
  }
);

obs.observe(sectionHeroEl);
