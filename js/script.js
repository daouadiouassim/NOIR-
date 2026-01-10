const blocks = document.querySelectorAll('.essay-block');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.35, rootMargin: '0px 0px -10% 0px' }
);

blocks.forEach((b, i) => {
  b.style.transitionDelay = `${i * 0.15}s`;
  observer.observe(b);
});

/* Page transition */
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.href && !link.href.includes('#')) {
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(() => window.location = link.href, 400);
    }
  });
});
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (toggle) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

