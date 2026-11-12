/* ============================================================
   JAYGANESH MANOHAR PRIVATE LIMITED — MAIN JAVASCRIPT
   script.js  |  Link this file on every page of the website
   ============================================================ */

/* ─── Mobile nav toggle ─── */
var hamburger = document.getElementById('ham');
var mobileNav = document.getElementById('mobnav');

if (hamburger && mobileNav) {
  hamburger.setAttribute('role', 'button');
  hamburger.setAttribute('aria-label', 'Toggle menu');
  hamburger.setAttribute('aria-expanded', 'false');

  function setMobileNav(open) {
    mobileNav.classList.toggle('open', open);
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    setMobileNav(!mobileNav.classList.contains('open'));
  });

  /* Close mobile nav when a link is clicked */
  mobileNav.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() { setMobileNav(false); });
  });

  /* Close when tapping outside the menu */
  document.addEventListener('click', function(e) {
    if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) setMobileNav(false);
  });

  /* Reset when the window grows back to desktop width */
  window.addEventListener('resize', function() {
    if (window.innerWidth > 900) setMobileNav(false);
  });
}

/* ─── Navbar shadow on scroll ─── */
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  if (window.scrollY > 30) {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.10)';
  } else {
    navbar.style.boxShadow = '0 1px 8px rgba(0,0,0,0.05)';
  }
});

/* ─── Contact form submission ─── */
function doSub() {
  var name  = document.getElementById('fn').value.trim();
  var email = document.getElementById('fe').value.trim();
  var phone = document.getElementById('fp').value.trim();
  var msg   = document.getElementById('fm').value.trim();

  if (!name || !email) {
    alert('Please fill in your Name and Email Address.');
    return;
  }

  /* Show success message */
  var successEl = document.getElementById('fok');
  successEl.style.display = 'block';

  /* Clear fields */
  document.getElementById('fn').value = '';
  document.getElementById('fe').value = '';
  document.getElementById('fp').value = '';
  document.getElementById('fm').value = '';

  /* Hide success message after 5 seconds */
  setTimeout(function() {
    successEl.style.display = 'none';
  }, 5000);
}

/* ─── Scroll-in animations ─── */
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

/* Elements to animate on scroll */
var animatedElements = document.querySelectorAll(
  '.biz-card, .why-card, .cert-card, .dir-card, .cli-card, .t-feat, .m-feat'
);

animatedElements.forEach(function(el) {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

/* ── Mobile Businesses submenu toggle ── */
function toggleMobBiz() {
  var sub   = document.getElementById('mobBizSub');
  var arrow = document.getElementById('mobBizArrow');
  if (!sub) return;
  var isOpen = sub.classList.toggle('open');
  if (arrow) arrow.textContent = isOpen ? '▴' : '▾';
}
