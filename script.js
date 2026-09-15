// Mobile sidebar toggle
const navToggle = document.getElementById('navToggle');
const sidebar = document.getElementById('sidebar');

if (navToggle && sidebar) {
  navToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!sidebar.classList.contains('is-open')) return;
    const clickedInsideSidebar = sidebar.contains(event.target);
    const clickedToggle = navToggle.contains(event.target);
    if (!clickedInsideSidebar && !clickedToggle) {
      sidebar.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  sidebar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Active section highlighting in the index nav
const sections = document.querySelectorAll('.catalog-section');
const navLinks = document.querySelectorAll('.index-nav a');

if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
  const linkForId = new Map();
  navLinks.forEach((link) => {
    const id = link.getAttribute('href').replace('#', '');
    linkForId.set(id, link);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linkForId.get(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove('is-active'));
          link.classList.add('is-active');
        }
      });
    },
    { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
