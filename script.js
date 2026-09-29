
const GEE_APP_URL = "https://tanu-p-483509.projects.earthengine.app/view/modis-vegetation-cover--india";

const geeFrame = document.getElementById('geeFrame');
const mapPlaceholder = document.getElementById('mapPlaceholder');
const openGeePlaceholder = document.getElementById('openGeePlaceholder');

function loadGeeApp() {
  if (!GEE_APP_URL.trim()) return;
  geeFrame.src = GEE_APP_URL;
  geeFrame.style.display = 'block';
  mapPlaceholder.style.display = 'none';
  openGeePlaceholder.textContent = 'Open map in new tab ↗';
  openGeePlaceholder.onclick = () => window.open(GEE_APP_URL, '_blank', 'noopener');
}

if (openGeePlaceholder && !GEE_APP_URL.trim()) {
  openGeePlaceholder.onclick = () => alert('');
}
loadGeeApp();

// Mobile navigation
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
}));

// Project filtering
const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');
filters.forEach(filter => filter.addEventListener('click', () => {
  filters.forEach(btn => btn.classList.remove('active'));
  filter.classList.add('active');
  const selected = filter.dataset.filter;
  projects.forEach(card => {
    const categories = card.dataset.category.split(' ');
    card.classList.toggle('hidden', selected !== 'all' && !categories.includes(selected));
  });
}));
