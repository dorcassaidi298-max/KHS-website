// PAGE NAVIGATION
const pages = ['home','services','about','gallery','faq','contact','ceilings','wallskimming','painting','cupboards'];
const navPages = ['home','services','about','gallery','faq','contact'];

function showPage(page) {
  pages.forEach(p => {
    const el = document.getElementById('page-'+p);
    if(el) el.classList.remove('active');
  });
  const target = document.getElementById('page-'+page);
  if(target) { target.classList.add('active'); }
  
  // Update nav active state
  navPages.forEach(p => {
    const el = document.getElementById('nav-'+p);
    if(el) el.classList.remove('active-link');
  });
  const navEl = document.getElementById('nav-'+page);
  if(navEl) navEl.classList.add('active-link');
  else if(['ceilings','wallskimming','painting','cupboards'].includes(page)) {
    document.getElementById('nav-services').classList.add('active-link');
  }
  
  window.scrollTo({top:0, behavior:'smooth'});
  closeMenu();
}

// HAMBURGER
function toggleMenu() {
  const h = document.getElementById('hamburger');
  const m = document.getElementById('mobileMenu');
  h.classList.toggle('open');
  m.classList.toggle('open');
}
function closeMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
}

// FAQ
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const allBtns = document.querySelectorAll('.faq-q.open');
  allBtns.forEach(b => {
    if(b !== btn) { b.classList.remove('open'); b.nextElementSibling.classList.remove('open'); }
  });
  btn.classList.toggle('open');
  answer.classList.toggle('open');
}

// FORM
function handleForm(e) {
  e.preventDefault();
  e.target.style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
}

// STAGE IMAGE TOGGLE
function toggleStageOverlay(img) {
  const overlay = img.querySelector('.stage-overlay');
  overlay.classList.toggle('hidden');
}

// SCROLL ANIMATIONS
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .process-card, .why-card, .price-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});