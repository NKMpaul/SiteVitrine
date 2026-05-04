// ═══════════════ NAV SCROLL ═══════════════
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});


document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  
  // Cette ligne récupère uniquement le nom du fichier, sans le chemin
  const page = window.location.pathname.split("/").pop();

  // On vérifie si on est sur l'accueil
  // (Le "" gère le cas où Vercel affiche l'URL sans ".html")
  const isHome = page === "" || page === "index.html" || page === "index";

  if (!isHome) {
    // Force le style noir sur les autres pages
    navbar.classList.add('static-nav');
  } else {
    // Garde l'effet de scroll uniquement pour l'accueil
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }
});


// ═══════════════ MENU HAMBURGER ═══════════════
function toggleMenu() {
  const h = document.getElementById('hamburger');
  const m = document.getElementById('mobileMenu');
  h.classList.toggle('open');
  m.classList.toggle('open');
  document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
}

function closeMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}

// ═══════════════ SCROLL REVEAL ═══════════════
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Lien actif dans la nav
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});

// ═══════════════ FILTRE PORTFOLIO (realisations.html) ═══════════════
function filterPortfolio(cat, btn) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.portfolio-item').forEach(item => {
    const match = cat === 'all' || item.dataset.cat === cat;
    item.style.opacity = match ? '1' : '0.2';
    item.style.transform = match ? 'scale(1)' : 'scale(0.97)';
  });
}
